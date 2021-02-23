const path = require('path');
const fs = require('fs');

module.exports = (app) => {
    // Renders notes file to browser
    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));
    // Renders index file to browser
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
}
console.log(__dirname);