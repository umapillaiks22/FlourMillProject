var app = require('express').Router();
var product = require('./product');

app.get('/',product.getall);
app.post('/add',product.add);
app.get('/delete',product.delete);

module.exports = app;