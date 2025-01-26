import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../lib/db.js";
import authRoutes from "../routes/auth.route.js";
import messageRoute from "../routes/message.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoute);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
  connectDB();
});
