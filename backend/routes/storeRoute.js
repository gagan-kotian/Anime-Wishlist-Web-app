const express = require("express");
const { createBook, displayBooks } = require("../controllers/books");
const router = express.Router();

router.post("/store", createBook);
router.get("/display", displayBooks);
// router.post("/delete", deleteBook);
// router.post("/update", updateBook);

module.exports = router;
