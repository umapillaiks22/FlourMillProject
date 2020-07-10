var app = require('express').Router();
var producttype = require('./producttype');

app.get('/',producttype.getall);
app.post('/add',producttype.add);
app.get('/delete',producttype.delete);
app.put('/update',producttype.update);
module.exports = app;