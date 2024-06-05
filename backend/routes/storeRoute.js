const express = require("express");
const {
  createBook,
  displayBooks,
  deleteBook,
  updateBook,
} = require("../controllers/books");
const router = express.Router();

router.post("/store", createBook);
router.get("/display", displayBooks);
router.delete("/delete/:id", deleteBook);
router.put("/update/:id", updateBook); // Use put method for updating

module.exports = router;
