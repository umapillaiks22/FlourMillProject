var app = require('express').Router();
var user = require('./login');
app.get('/',user.getall);
app.post('/add',user.add);
module.exports = app;