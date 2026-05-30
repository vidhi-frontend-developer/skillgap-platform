const express = require("express");
const router = express.Router();

const db = require("../../config/db");

/* SIGNUP */
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const sql =
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(
    sql,
    [name, email, password],
    (err, result) => {
      if (err) {
        return res.json({
          success: false,
          message: "Signup failed",
        });
      }

      res.json({
        success: true,
        message: "Signup successful",
      });
    }
  );
});

/* LOGIN */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE email=? AND password=?";

  db.query(
    sql,
    [email, password],
    (err, results) => {
      if (err) {
        return res.json({
          success: false,
          message: "Server error",
        });
      }

      if (results.length > 0) {
        res.json({
          success: true,
          user: results[0],
        });
      } else {
        res.json({
          success: false,
          message: "Invalid credentials",
        });
      }
    }
  );
});

module.exports = router;