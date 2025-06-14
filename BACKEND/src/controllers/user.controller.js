import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Token generation error:", error);
    throw new apiError(
      500,
      "Something went wrong while generating access or refresh token"
    );
  }
};

const options = {
  httpOnly: true,
  secure: true,
};

// Register
const userRegister = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    throw new apiError("All fields are required", 400);
  }

  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new apiError("User already exists", 400);
  }

  // profilePic setup and upload on cloudinary
  const profilePicLocalPath = req.file?.path;
  if (!profilePicLocalPath) {
    throw new apiError("Profile picture is required", 400);
  }

  const profilePic = await uploadOnCloudinary(profilePicLocalPath);

  if (!profilePic) {
    throw new apiError("Failed to upload profile picture", 400);
  }

  const user = await User.create({
    fullName,
    email,
    password,
    profilePic: profilePic.url,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new apiError("Failed to create user", 400);
  }

  return res
    .status(201)
    .json(new apiResponse(201, "User created successfully", createdUser));
});

// Login
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });
  if (!user) {
    throw new apiError(404, "user not found");
  }

  const isPasswordMatched = await user.isPasswordCorrect(password);
  if (!isPasswordMatched) {
    throw new apiError(401, "Invalid Password");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new apiResponse(200, "user Logged In Successfully", {
        user: loggedInUser,
        accessToken,
        refreshToken,
      })
    );
});

// Logout
const userLogout = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new apiResponse(200, "user Logout successfully", {}));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;
  if (!incomingRefreshToken) {
    throw new apiError(401, "Unauthorized");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new apiError(401, "Invalid refresh token");
    }
    if (incomingRefreshToken !== user?.refreshToken) {
      throw new apiError(401, " refresh token is Expired or used");
    }

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshToken(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new apiResponse(200, "Access Token Refreshed", {
          accessToken,
          newRefreshToken,
        })
      );
  } catch (error) {
    throw new apiError(401, "Invalid refresh token" || error?.message);
  }
});

export { userRegister, userLogin, userLogout, refreshAccessToken };
