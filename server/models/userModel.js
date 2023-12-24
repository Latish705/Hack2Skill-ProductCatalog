import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: { type: String, required: true, trim: true, minlength: 6 },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);
