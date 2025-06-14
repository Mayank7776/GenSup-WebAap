import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { userRegister, userLogin, userLogout } from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/Register", upload.single("profilePic") , userRegister);
router.post("/Login", userLogin);
router.post("/Logout", verifyJwt, userLogout)


export default router;