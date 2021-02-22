const fs = require('fs');
const dbpath = path.join(__dirname, "db", "db.json");

 fs.readFile('db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    console.log(notes);
    // Route to send notes saved in JSON
    app.get('/api/notes', (req, res) => res.json(notes));
    // Route to send particular notes saved in JSON based on key id from broswer click
    app.get('api/notes/:id', (req, res) => {
       res.json(notes[req.params.id]); 
    });
    // Route to save note to file
    app.post('/api/notes', (req, res) => {
        let newNote = req.body;
        notes.push(newNote);
        return res.json({});
    });
});