var fbref = require('../utils/utils');

let path = "/usersign";
var usersignObj = {
    "getall": function(req,res){
        fbref.getAllObjects(path).then(success => {
            res.send(success);
        }).catch(error => {
            res.send(error);
        });     
    },
    "add" : function(req,res){
        var ptypeObj = req.body;
        fbref.addObject(path, ptypeObj).then(success => {
            res.send(success);
        }).catch(error => {
            res.send(error);
        });
    },
}
module.exports = usersignObj;