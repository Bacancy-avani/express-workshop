const express = require('express');
const app = express();
const bodyparser = require('body-parser')
    
app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(request, response) {
	response.end(request.body.str.split('').reverse().join(''));
}).listen(process.argv[2]);