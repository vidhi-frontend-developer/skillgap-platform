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
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl, or postman)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true, // Crucial if your login/logout utilizes HTTP-only cookies or sessions
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