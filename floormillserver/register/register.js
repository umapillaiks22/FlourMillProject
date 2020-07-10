var fbref = require('../utils/utils');
var register = [{"username" : "", "email" : "", "lane" :"", "area": "", "city":"", "circle": "", "password":"", "cpassword":""}];

var path = "/register";
var registerObj = {
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
};
module.exports = registerObj;