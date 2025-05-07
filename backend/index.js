// npx nodemon index.js

const express = require("express");
const cors = require("cors");
const pool = require("./db.js");
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes:
// create a book

// get all books

// get a single book

// update a single book

// delete a single book

app.listen(5000, () => {
  console.log("Server has started on port: 5000");
});
