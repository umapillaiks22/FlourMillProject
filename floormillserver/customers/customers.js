
var fbref = require('../utils/utils');

var path = "/customers";

var customerobj = {
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
    "update": function(req,res){
        var custObj = req.body;
        fbref.updateObject(path,custObj.key, custObj).then(success => {
            res.send(success);
        }).catch(error => {
            res.send(error);
        });
    }
}

module.exports = customerobj;