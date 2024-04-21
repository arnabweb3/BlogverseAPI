import express from "express";
import { config } from "dotenv";
import blogRoutes from "./routes/blogs.js";
import userRoutes from "./routes/users.js";
import bodyParser from "body-parser";
import { connectDB } from "./database/db.js";

// Load .env file contents into process.env.
config();

// Connect to Database
connectDB();

const app = express();

app.use(bodyParser.json());
app.use("/api/v1", blogRoutes);
app.use("/api/v1", userRoutes);

const { APP_NAME, PORT } = process.env;

app.listen(PORT, () => console.log(`${APP_NAME} is running on port ${PORT}`));
