const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./src/routes/auth");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(3000, () => console.log("Server running on port 3000"));
