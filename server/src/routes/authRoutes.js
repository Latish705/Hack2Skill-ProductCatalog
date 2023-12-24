import { Router } from "express";
import { registerUser } from "../controllers/authController.js";
import { upload } from "../middlewares/multerMiddleware.js";

const router = Router();
router.route("/register").post(
  upload.single({
    name: "avatar",
    maxcount: 1,
  }),
  registerUser
);

export default router;
