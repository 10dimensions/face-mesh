var express = require('express');
var app = express();

var fs = require('fs');

var https = require('https');
var http = require('http');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };

http.createServer(app).listen(8000);
https.createServer(options, app).listen(8080);

app.use(express.static(__dirname + '/www'));
app.use(express.static('public'));

app.get('/public/aviator.gltf', function(req, res){
  res.sendFile(__dirname + '/public/aviator.gltf');
});

console.log('working on 8000 & 8080');