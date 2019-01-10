const express = require('express');
const app = express();
const fs = require('fs');

app.get('/books', function(req, res){
  fs.readFile(process.argv[3], function(err, data) {
    if (err){
      return console.log(err);
    } 
    res.json(JSON.parse(data));
  })
}).listen(process.argv[2]);