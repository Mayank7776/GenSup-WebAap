import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { userRegister, userLogin, userLogout, userProfile, refreshAccessToken } from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/Register", upload.single("profilePic") , userRegister);
router.post("/Login",upload.none(), userLogin);
router.post("/Logout", verifyJwt, userLogout);
router.get("/Profile", verifyJwt, userProfile);
router.post("/refresh-token", refreshAccessToken);



export default router;