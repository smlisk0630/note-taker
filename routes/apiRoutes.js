const notes = require("../db/db");
const fs = require('fs');

app.get('/api/notes', (req, res) => {
    return res.json(notes);
})

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    return newNote;
})