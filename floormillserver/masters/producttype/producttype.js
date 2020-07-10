var fbref = require('../../utils/utils');

let path = "/masters/producttype";

var producttypesObj = {
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
    "update": function(req,res){
        var ptypeObj = req.body;
        fbref.updateObject(path,ptypeObj.key, ptypeObj).then(success => {
            res.send(success);
        }).catch(error => {
            res.send(error);
        });
    },
    "findById": function(req,res){
        var key = req.params.key;
        fbref.getObjectById(path, key).then(success => {
            res.send(success);
        }).catch(error => {
            res.send(error);
        })
    },
    "delete": function(req,res){
        
        res.send({"msg":"deleted successfully"});
    },
};


module.exports = producttypesObj;