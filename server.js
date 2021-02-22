// Dependencies
const express = require("express");
const path = require("path");
const notes = require("./db/db");
const fs = require("fs");

// Set up express app
const app = express();
require("./routes/htmlRoutes")(app);
const PORT = process.env.PORT || 5000;
app.use(express.static("public"));
const dbpath = path.join(__dirname, "db", "db.json");

// New notes array
const notesArr = [];

// Create New Notes - takes in JSON input
app.post("/api/notes", (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  const newNote = req.body;
  notesArr.push(newNote);
  res.json(newNote);

    // Add event listener to save icon
    // const addBtn = document.getElementById("save-note");
    // addBtn.push(newNote);
    // addBtn.addEventListener("click", (event) => {
    // event.preventDefault();

    // // Send info about the format of the data that in the sent request
    // fetch("/api/notes", {
    //     method: "POST",
    //     headers: {
    //     "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(notes),
    // })
    //     .then((response) => response.json())
    //     .catch((error) => {
    //     console.error("Error:", error);
    //     });
    // });

    // Write note
    function writeNote() {
    fs.writeFile(notes, JSON.stringify(notes), (err) => {
        if (err) throw err;
        return true;
    });
    return console.log(newNote);
    }
});

// Starts server to begin listening
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
