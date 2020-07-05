var express = require('express');
var app = express();

var fs = require('fs');

var https = require('https');
var http = require('http');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };

app.use(express.static(__dirname + '/www'));

http.createServer(app).listen(8000);
https.createServer(options, app).listen(8080);

console.log('working on 8000 & 8080');