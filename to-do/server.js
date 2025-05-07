// server.js
const express = require("express");
const { Pool } = require("pg");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "formapp",
  password: process.env.DB_PASSWORD || "postgres",
  port: process.env.DB_PORT || 5432,
});

// Create table if not exists
const initDatabase = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS user_inputs (
        id SERIAL PRIMARY KEY,
        data TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Database initialized");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

// API endpoint to save data
app.post("/api/data", async (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ error: "Data is required" });
    }

    const result = await pool.query("INSERT INTO user_inputs(data) VALUES($1) RETURNING *", [data]);

    res.status(201).json({
      message: "Data saved successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// API endpoint to get all data
app.get("/api/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM user_inputs ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(PORT, async () => {
  await initDatabase();
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export for testing
