const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Ensure our database file runs and connects on server startup
require("./config/db"); 

const app = express();

// Configure CORS correctly for Production vs Local Development
const allowedOrigins = [
  "http://localhost:3000", // Common local React port
  "http://localhost:5173", // Common local Vite port
  "https://skillgap-platform-2026.vercel.app" // ⚠️ REPLACE THIS with your actual live Vercel URL later
];

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://skillgap-platform-2026.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

/* ROUTES */
const authRoutes = require("./api/routes/authRoutes");

app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("SkillGap Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});