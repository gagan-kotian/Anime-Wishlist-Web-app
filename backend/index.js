const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./routes/storeRoute.js");

app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://gagankotian48:Y77WGdDWP1WKhVEx@cluster0.sihiiyr.mongodb.net/bookstore";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    // Your code here
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(3000, () => {
  console.log("Server setup");
});
