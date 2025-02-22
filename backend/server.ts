import express from "express";
import { connectDB } from "./config/db";
import projectRoutes from "./routes/projectRoutes";
import morgan from "morgan";
import cors from "cors";
import { corsOptions } from "./config/cors";
import authRoutes from "./routes/authRoutes";
connectDB();
const app = express();
app.use(cors(corsOptions));
app.use(morgan("tiny"));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

export default app;
