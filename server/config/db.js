// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.log("Database Connection Failed");
//     console.log(err);
//   } else {
//     console.log("MySQL Connected");
//   }
// });

// module.exports = db;

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // Forces it to be a valid number
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed");
    console.log(err);
  } else {
    console.log("MySQL Connected successfully!");
  }
});

module.exports = db;