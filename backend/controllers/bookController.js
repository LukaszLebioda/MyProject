const Book = require("./../models/bookModel.js");
const mongoose = require("mongoose");

// get all books
const getBooks = async (req, res) => {
  // get all books from db, where author is Dan Simmons
  // const books = await Book.find({}).sort({ author: "Simmons" });
  const books = await Book.find({}).sort({ createdAt: -1 });
  res.status(200).json(books); // or json({ mssg: "GET all books" });
};

// get a single book
const getBook = async (req, res) => {
  const { id } = req.params; // get id from router params
  // check if id is a valid mongoose object
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid book ID" });
  }
  const book = await Book.findById(id);
  // check if id exists in db
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json(book); // or json({ mssg: "Get a book" });
};

// create new book
const createBook = async (req, res) => {
  // indicate what req.body should contain
  const { title, author, published, genre, description } = req.body;

  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!author) {
    emptyFields.push("author");
  }
  if (!published) {
    emptyFields.push("published");
  }
  if (!genre) {
    emptyFields.push("genre");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({
      error: "Please fill in all the fields",
      emptyFields,
    });
  }

  try {
    // create new book with Book model (add new doc to db)
    const book = await Book.create({
      title,
      author,
      published,
      genre,
      description,
    });
    // indicate what the response status & body should be on success§
    res.status(201).json(book);
  } catch (error) {
    // indicate what the response status & body should be on failure
    res.status(400).json({ error: error.message });
  }
};

// update a book
const updateBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid book ID" });
  }
  const book = await Book.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json(book);
};

// delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid book ID" });
  }
  const book = await Book.findOneAndDelete({ _id: id });
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json(book);
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
