import express from "express";
const app = express();
import { config } from "dotenv";
import routes from "./routes/blogs.js";
import bodyParser from "body-parser";
import { connectDB } from "./database/db.js";

// Load .env file contents into process.env.
config();

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use("/api/v1", routes);

const appName = process.env.APP_NAME;
const port = process.env.port;

app.listen(port, () => console.log(`${appName} is running on port ${port}`));
