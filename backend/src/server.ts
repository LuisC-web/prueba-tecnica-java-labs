import express from "express";
import { connectToDatabase } from "./config/db";
import morgan from "morgan";
import cors from "cors";
import { corsOptions } from "./config/cors";
import usersRoutes from "./routes/usersRoutes";
import transactionsRoutes from "./routes/transactionsRoutes";

connectToDatabase();
const app = express();
app.use(cors(corsOptions));
app.use(morgan("tiny"));
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/transactions", transactionsRoutes);
export default app;
