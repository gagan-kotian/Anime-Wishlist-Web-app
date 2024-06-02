const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: String,
});

module.exports = mongoose.model("Store", storeSchema);
