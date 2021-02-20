const express = require('express');
const path = require('path');
const notes = require("./db/db");
const fs = require('fs');

const app = express();
const html = require('./routes/htmlRoutes')(app);
const PORT = process.env.PORT || 5000;
app.use(express.static('public'));
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));