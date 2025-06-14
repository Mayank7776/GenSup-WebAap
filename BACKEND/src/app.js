import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "*", // restrict in production
  credentials: true,
}));
app.use(cookieParser());
app.use(express.static("public"));

// Routes
import userAuth from "./routes/user.route.js";
app.use("/api/userAuth", userAuth);

export default app;
