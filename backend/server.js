// npm run dev -> to run server with nodemon
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/books.js");
const port = process.env.PORT;

//express app
const app = express();

// middleware (runs globally after every request)
app.use(express.json()); // allows to use json body in requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); // moves to next middleware
});

// listen for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
  console.log(`Server started at http://localhost:${port}`);
});

// API routes ("localhost:4000/api/books/")
app.use("/api/books", routes); // "/api/books" as prefix to routes
// instead of:
// app.get("/", (req, res) => {
//   res.json({ mssg: "Welcome to the app" });
//   //   res.send("Server is ready...");
//   //   res.sendFile("./index.html");
// });
