const express = require('express');
const app = express();

app.get('/home', function(request, response) {
	app.set('view engine', 'pug');
	//app.set('views', path.join(__dirname, 'templates'));
	response.render(process.argv[3], {date: new Date().toDateString()})
}).listen(process.argv[2]);