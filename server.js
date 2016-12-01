var http = require('http');
var express = require('express');
var path = require('path');
var app = express();
var server = http.createServer(app);
app.use(express.static(path.join(__dirname, 'ngrequire')));
server.listen(3001,function(){
	console.log("server start in 3001" )
})
