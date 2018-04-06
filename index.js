var express = require('express');

var port = 4000;

var app = express();

app.use(express.static(__dirname + '/build'));

module.exports = app;
app.listen(port, function () {
    console.log("Started server on port", port);
});
