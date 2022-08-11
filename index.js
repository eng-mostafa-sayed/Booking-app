import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_NAME);
    console.log("Connected to database");
  } catch (e) {
    console.error(e.message);
  }
};
const port = 3000 || process.env.PORT;
app.listen(port, () => {
  connect();
  console.log(`listening on "localhost://${port}"`);
});
