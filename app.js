// require("dotenv").config();
import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 6969;
import students from "./models/students.js";

app.use(express.json());
dotenv.config();
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on("error", (errormsg) => console.log(errormsg));
db.once("open", () => {
  console.log("Connection Established");
});

console.log("app.js");

app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/api/v1/students", students);

app.listen(PORT, () => {
  console.log(`API is working on ${PORT}`);
});
