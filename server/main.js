var express = require('express');

var app = new express();

app.set('view engine', 'ejs');
app.set('view options', {
    layout: false
});

app.get('/', function(req,res){
    res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(5000);
