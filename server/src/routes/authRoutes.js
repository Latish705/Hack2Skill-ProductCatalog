import { Router } from "express";
import { registerUser } from "../controllers/authController.js";
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

export default authRouter;
