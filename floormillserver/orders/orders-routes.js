var app = require('express').Router();
var order = require('./orders');

app.get('/',order.getall);
app.post('/add',order.add);
app.get('/findByid', order.findByid);

module.exports = app;