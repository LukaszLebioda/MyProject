const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// first we create schema (required structure for document in collection)
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    published: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // adds createdAt and updatedAt fields

// then we create & export model based on that schema (to iteract with db collection)
// "Book" will be pluralized automatically and collection name: "books" will be created automatically as well
module.exports = mongoose.model("Book", bookSchema);
