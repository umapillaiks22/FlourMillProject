var fbref = require('../utils/utils');
var path = "/login";
var user = [{username:"",password:""}];
var userObj = {
    "getall" : function(req,res){
        fbref.getAllObjects(path).then(success => {
            res.send(success);
        }).catch(error => {
            res.send(error);
        });
    },
    "add" : function(req,res){
        var custObj = req.body;
        fbref.addObject(path,custObj).then(success => {
            res.send(success);
        }).catch(error => {
            res.send(error);
        });
},
}
module.exports = userObj;