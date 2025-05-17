// CommonJS (outdated): package.json -> "type": "commonjs"
// const express = require("express");
// ES Module (modern): package.json -> "type": "module")
import express from "express";
import "dotenv/config";

//express app
const app = express();
const port = process.env.PORT;

// // middleware
// app.use((req, res, next) => {})

// listen for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
  console.log(`Server started at http://localhost:${port}`);
});

// API routes ("localhost:4000/")
// GET
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
  //   res.send("Server is ready...");
  //   res.sendFile("./index.html");
});
