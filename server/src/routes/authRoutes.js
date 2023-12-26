import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { upload } from "../middlewares/multerMiddleware.js";

const authRouter = Router();
authRouter.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxcount: 1,
    },
  ]),
  registerUser
);

authRouter.route("/login").post(loginUser);

export default authRouter;
