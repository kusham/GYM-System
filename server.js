// Import required packages
const express = require("express");
const dotenv = require("dotenv");

var db = require("./src/config/DatabaseConnection"); // import database connection Database
const dbSync = require("./src/config/DatabaseSync");

const app = express();
dotenv.config();

// get the port from .env
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  db.authenticate()
    .then(() => {
      console.log("Database Connection has been established successfully.");
      dbSync();
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error.message);
    });
});
