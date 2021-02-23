// Dependencies
const express = require("express");
const path = require("path");
const notes = require("./db/db");
const fs = require("fs");

// Set up express app
const app = express();
const PORT = process.env.PORT || 5000;
const dbpath = path.join(__dirname, "db", "db.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// New notes array
const notesArr = [];

// Starts server to begin listening
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
