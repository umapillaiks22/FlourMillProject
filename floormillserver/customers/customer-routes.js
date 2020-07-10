var app = require('express').Router();
var customer = require('./customers');

app.get('/',customer.getall);
app.post('/add',customer.add);
app.put('/update',customer.update);


module.exports = app;