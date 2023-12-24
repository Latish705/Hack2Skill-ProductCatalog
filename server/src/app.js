import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";

dotenv.config({
  path: "./.env",
});

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/auth", authRouter);

export default app;
