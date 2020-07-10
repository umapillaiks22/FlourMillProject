var app = require('express').Router();
var usersign = require('./usersign');

app.get('/',usersign.getall);
app.post('/add',usersign.add);

module.exports = app;