var express = require('express');
var path = require('path');

var port = process.env.PORT || 1337;

var app = express();

app.use(express.static(path.join(__dirname, '/')));

app.listen(port, function() {
	console.log('Application is running on port %s', port);
});