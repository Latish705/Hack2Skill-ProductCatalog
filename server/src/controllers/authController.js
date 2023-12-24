import { User } from "../models/userModel.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { Jwt } from "jsonwebtoken";

export const registerUser = AsyncHandler(async (req, res) => {
  const { username, email, password, contact } = req.body;

  if (
    [username, email, password, contact].some((field) => field.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existingUser) {
    throw new ApiError(400, "User already exists with email or username");
  }
});
