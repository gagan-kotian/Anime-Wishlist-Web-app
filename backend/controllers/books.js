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

const displayBooks = async (req, res) => {
  try {
    const books = await Store.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    console.log("Hi");
    const { id } = req.params;
    console.log(id);

    const book = await Store.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    await Store.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params; // get the id from the request parameters
  const { title, author, price } = req.body; // get the new details from the request body

  try {
    const updatedBook = await Store.findByIdAndUpdate(
      id,
      { title, author, price },
      { new: true, runValidators: true } // return the updated document and run schema validators
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

module.exports = { createBook, displayBooks, deleteBook, updateBook };
