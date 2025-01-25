import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../lib/db.js";
dotenv.config();
import authRoutes from "../routes/auth.route.js";

const app = express();
app.use("/api/auth",authRoutes);
const PORT =process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`);
    connectDB();

})