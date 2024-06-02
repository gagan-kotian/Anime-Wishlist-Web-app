const Store = require("../models/Store.js");

const createBook = async (req, res) => {
  const { title, author, price } = req.body;
  try {
    const newbook = new Store({ title, author, price });
    await newbook.save();
    res.status(200).json(newbook);
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

module.exports = { createBook };
