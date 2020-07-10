var app = require('express').Router();
var register = require('./register');
app.get('/',register.getall);
app.post('/add',register.add);
module.exports = app;