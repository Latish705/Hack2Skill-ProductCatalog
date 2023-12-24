import { User } from "../models/userModel.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
// import { Jwt } from "jsonwebtoken";
import { uploadToCloudinary } from "../utils/uploadToCloundinary.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, contact } = req.body;

  if (
    [username, email, password, contact].some((field) => field.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existingUser) {
    throw new ApiError(400, "User already exists with email or username");
  }
  let avatarLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.avatar) &&
    req.files.avatar.length > 0
  ) {
    avatarLocalPath = req.files.avatar[0].path;
  }

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }
  const avatar = await uploadToCloudinary(avatarLocalPath);

  const user = await User.create({
    username,
    avatar: avatar.url,
    email,
    password,
    contact,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res.status(201).send({
    success: true,
    message: "User registered successfully",
    createdUser,
  });
});
