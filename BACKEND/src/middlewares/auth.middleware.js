import dotenv from "dotenv";
dotenv.config();

import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const verifyJwt = asyncHandler(async (req, res, next) => {
  let token;

  // 1. Try getting the token from cookies
  if (req.cookies?.accessToken) {
    token = req.cookies.accessToken;
  }
  // 2. Or from Authorization header (Bearer <token>)
  else if (req.headers?.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  // 3. If no token, throw error
  if (!token) {
    throw new apiError(401, "Unauthorized: Token not provided");
  }

  try {
    // 4. Verify token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // 5. Fetch user from DB
    const user = await User.findById(decoded._id).select("-password -refreshToken");
    if (!user) {
      throw new apiError(401, "Unauthorized: User not found");
    }

    // 6. Attach user to request
    req.user = user;
    next();
  } catch (error) {
    throw new apiError(401, "Unauthorized: " + (error?.message || "Invalid token"));
  }
});
