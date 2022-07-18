const express = require('express');
const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/src/index.html');
})

app.use(express.static('public'));
app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);