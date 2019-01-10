const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));
app.get('/home', function(request, response) {
	response.render('index', {date: new Date().toDateString()})
}).listen(process.argv[2]);