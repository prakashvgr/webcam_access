var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '/')));

app.listen(8080, function() {
	console.log('Application is running on port 3000');
});