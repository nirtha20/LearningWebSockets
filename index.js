var express = require('express');


//App Setup
var app = express();
var server = app.listen(4000, function(){
    console.log("Listening on port 4000 ...");
})

//Static files
app.use(express.static('public'));