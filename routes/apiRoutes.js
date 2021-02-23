const fs = require("fs");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
      if (err) return [];
      res.json(JSON.parse(data));
    });
  });
  
  // Route to save note to file
  app.post("/api/notes", (req, res) => {
    // let notes = [];
    fs.readFile("db/db.json", "utf8", (err, data) => {
      if (err) console.log(err);
      // notes = data returned from JSON.parse (all data in database)
      let notes = JSON.parse(data);
      let newNote = req.body;
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
