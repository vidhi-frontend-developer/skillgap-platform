const express = require("express");
const router = express.Router();

const db = require("../../config/db");

/* ==========================
   SIGNUP
========================== */
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const sql =
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error("Signup Error:", err);

      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({
          success: false,
          message: "Email already registered",
        });
      }

      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    res.json({
      success: true,
      message: "Signup successful",
    });
  });
});

/* ==========================
   LOGIN
========================== */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Login Request:", req.body);

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  const sql =
    "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("Login Error:", err);

      return res.status(500).json({
        success: false,
        message: "Server error",
      });
    }

    if (results.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: results[0].id,
        name: results[0].name,
        email: results[0].email,
      },
    });
  });
});

module.exports = router;