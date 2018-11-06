// Load the http module to create an http server.
var http = require('http');
const express = require('express');
const app = new express();

var config = require("platformsh").config();

app.get('/', function(request, response){
  response.sendfile('index.html');
});

app.listen(config.port);