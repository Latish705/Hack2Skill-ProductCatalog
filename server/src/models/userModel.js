import mongoose from "mongoose";
import { hashPassword } from "../utils/bcrypt.js";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    contact: {
      type: Number,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: Boolean,
      required: true,
      default: false,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// userSchema.pre("save", async function (next) {
//   //we cannot use arrow function cause arrow function doesn't have this keyword context
//   if (!this.isModified("password")) return next();
//   this.password = await hashPassword(this.password, 10);
// });

// //if we are using the above function then we have to create user first
// //this pre is middleware

// userSchema.methods.generateAccessToken = function () {
//   return jwt.sign({
//     id: this._id,
//     email: this.email,
//     username: this.username,
//     contact: this.contact,
//   });
// };

// userSchema.methods.refreshAccessToken = function () {
//   return jwt.sign({
//     id: this._id,
//   });
// };

export const User = mongoose.model("User", userSchema);
