var app = require('express')();
var bodyparser = require('body-parser');
var routes = require('./routes/routes');
var cors = require('cors');

app.use(cors());
app.options('*',cors());
app.use(bodyparser.json());
app.use('/',routes);
app.listen(3000, () =>{
    console.log("Listening on 3000")
});