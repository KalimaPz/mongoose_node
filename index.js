const express = require("express");
const router = express.Router();
const connectMongo = require("./Connection");
const app = express();
const Port = process.env.Port || 3000;
connectMongo();
const Student = require("./Models/Student");
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});
app.listen(Port, () => console.log("Server is running", Port));
