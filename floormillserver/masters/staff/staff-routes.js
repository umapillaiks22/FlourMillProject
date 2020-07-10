var app= require('express').Router();
var staff = require('./staff');

app.get('/',staff.getAll);
app.post('/add',staff.add);
app.get('/delete',staff.delete);
app.put('/update',staff.update);
app.get('/getByName', staff.sortByName);
app.post('/filterpin', staff.filterBypin);
app.get('/findByid', staff.findByid);

module.exports = app;