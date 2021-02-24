const fs = require("fs");
const uniqid = require("uniqid");

module.exports = (app) => {
  let notes = [];
  console.log(notes);
  app.get("/api/notes", (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
      if (err) return [];
      res.json(JSON.parse(data));
    });
  });
  app.get("/api/notes/:id", (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
      if (err) return [];
      res.json(notes[req.params.id]);
    });
  });

  // Route to save note to file
  app.post("/api/notes", (req, res) => {
    // let notes = [];
    fs.readFile("db/db.json", "utf8", (err, data) => {
      if (err) console.log(err);
      // notes = data returned from JSON.parse (all data in database)
      let notes = JSON.parse(data);
      // Attaches unique id at moment of initial post
      const { title, text } = req.body;
      const newNote = { title, text, id: uniqid() };
      notes.push(newNote);
      // Write note
      fs.writeFile("db/db.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
        return true;
      });
      return res.json(notes);
    });
  });
};
