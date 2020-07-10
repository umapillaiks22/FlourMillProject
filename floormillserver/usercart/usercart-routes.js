var app = require('express').Router();
var usercart = require('./usercart');

app.get('/',usercart.getall);
app.post('/add',usercart.add);
app.get('/delete',usercart.delete);
app.put('/update',usercart.update);
module.exports = app;