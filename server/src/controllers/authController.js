import { User } from "../models/userModel.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
// import { Jwt } from "jsonwebtoken";
import { uploadToCloudinary } from "../utils/uploadToCloundinary.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, contact } = req.body;

  // if (
  //   [username, password, email, contact].some((field) => field.trim() === "")
  // ) {
  //   throw new ApiError(400, "All fields are required");
  // }
  console.log(username, email, password, contact);
  if (!username || !email || !password || !contact) {
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

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    username,
    avatar: avatar.url,
    email,
    password: hashedPassword,
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

export const loginUser = asyncHandler(async (req, res) => {
  //get data from req.body using email and password only
  //find the user
  //password check
  //access and refresh token
  //send cookie
  const { email, password } = req.body;
  console.log(email, password);
  if ([email, password].some((fields) => fields.trim() === "")) {
    throw new ApiError(
      400,
      "All fields are required please provide email and password"
    );
  }

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    throw new ApiError(400, "User not exists please register first");
  }

  isPasswordMatch = await comparePassword(password, existingUser.password);
  if (!isPasswordMatch) {
    throw new ApiError(200, "Password doesn't match");
  }
});
