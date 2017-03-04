// var http = require('http');
// var server = http.createServer(app);

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'ngrequire')));
app.listen(3001,function(){
	console.log("server start in 3001" )
})
