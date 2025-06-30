import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    profilePic: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


// hashing password using bcrypt
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

//
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// generateAccessToken
userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            fullName: this.fullName,
            email: this.email,
            profilePic: this.profilePic,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};

// generateRefreshToken
userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    });
};

const User = mongoose.model("User", userSchema);
export default User;