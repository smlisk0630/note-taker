const notes = require("../Develop/db/db");

app.get('/api/notes', (req, res) => {
    return res.json(notes);
})

app.post('/api/notes', (req, res) => {

})