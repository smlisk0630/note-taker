const express = require('express');
const path = require('path');
const notes = require("./db/db");
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));