const express = require("express");
// const router = express.Router();
const { createBook, getBook, getBooks, updateBook, deleteBook } = require("../controllers/bookController.js");
const requireAuth = require("../middleware/requireAuth.js");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all books
router.get("/", getBooks);

// GET a single book
router.get("/:id", getBook);

// POST a new book (async)
router.post("/", createBook);

// DELETE a book
router.delete("/:id", deleteBook);

// UPDATE a book
router.patch("/:id", updateBook);

module.exports = router;
