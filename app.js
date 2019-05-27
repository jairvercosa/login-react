'use strict';

const express = require('express');

const path = require('path');

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use(express.static(path.join(__dirname, 'dist/')))
app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
