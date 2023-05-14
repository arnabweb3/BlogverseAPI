import mongoose from "mongoose";

const connectDB = () => {
  const dbUrl = process.env.DB_URI;

  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(`Failed to connect database : ${error}`);
    });
};

export { connectDB };
