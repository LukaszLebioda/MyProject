// npm run dev -> to run server with nodemon
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bookRoutes = require("./routes/books.js");
const userRoutes = require("./routes/user.js");
const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

// express app
const app = express();

// // listen for requests
// // we want to start the server only after connecting with db
// // so we moved this code into mongoDB connection declaration
// app.listen(port, () => {
//   console.log(`Listening on port ${port}...`);
//   console.log(`Server started at http://localhost:${port}`);
// });

// middleware (runs globally after every request)
app.use(express.json()); // allows to use json body in requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); // moves to next middleware
});

// API routes ("localhost:4000/api/books/")
app.use("/api/books", bookRoutes); // "/api/books" as prefix to routes
// instead of:
// app.get("/", (req, res) => {
//   res.json({ mssg: "Welcome to the app" });
//   //   res.send("Server is ready...");
//   //   res.sendFile("./index.html");
// });
app.use("/api/user", userRoutes);

// connect to db (async, returns promise)
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to database");
    // listen for requests
    // we want to start the server only after connecting with db
    // so we moved this code into mongoDB connection declaration
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
    console.log(error);
  });
