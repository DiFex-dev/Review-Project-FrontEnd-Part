const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/build/"));

app.get(/.*/, function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
});

app.listen(port);
