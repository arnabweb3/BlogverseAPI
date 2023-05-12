import express from "express";
const app = express();
import { config } from "dotenv";

// Load .env file contents into process.env.
config();

const appName = process.env.appName;

app.get("/", (req, res) => {
  res.status(200).json({
    message: `Connecting to ${appName} API`,
  });
});

const port = process.env.port;
app.listen(port, () => console.log(`${appName} is running on port ${port}`));
