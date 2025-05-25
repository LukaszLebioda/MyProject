const express = require("express");
const Book = require("./../models/bookModel.js");
const router = express.Router();

// GET all books
router.get("/", (req, res) => {
  res.json({ mssg: "GET all books" });
});

// GET a single book
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get a single book" });
});

// POST a new book (async)
router.post("/", async (req, res) => {
  // indicate what req.body should contain
  const { title, author, published, genre, description } = req.body;
  try {
    // create new book with Book model
    const book = await Book.create({ title, author, published, genre, description });
    // indicate what the response status & body should be on success§
    res.status(201).json(book);
  } catch (error) {
    // indicate what the response status & body should be on failure
    res.status(400).json({ error: error.message });
  }
});

// DELETE a book
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a book" });
});

// UPDATE a book
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a book" });
});

module.exports = router;
