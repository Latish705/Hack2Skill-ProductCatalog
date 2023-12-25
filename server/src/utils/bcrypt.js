import bcrypt from "bcrypt";
import ApiError from "./ApiError.js";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new ApiError(400, "Error while hashing the password");
  }
};

export const comparePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw new ApiError(400, "Error while comparing hashed Password");
  }
};
