var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.use(express.static(path.join(__dirname, 'dist/')))
app.listen(process.env.PORT);
