const express = require("express");
const router = express.Router();
const cors = require('cors')
const connectMongo = require("./Connection");
const app = express();
const Port = process.env.Port || 8080;
app.use(cors());
connectMongo();
const Student = require("./Models/Student");
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});
app.listen(Port, () => console.log("Server is running", Port));
