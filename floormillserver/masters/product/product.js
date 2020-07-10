var fbref = require('../../utils/utils');

var path = "/masters/product";

var productobj = {
    "getall" : function(req,res){
        fbref.getAllObjects(path).then(success => {
            res.send(success);
        }).catch(error => {
            res.send(error);
        });
    },
    "add" : function(req,res){
        var prObj = req.body;
        fbref.addObject(path,prObj).then(success => {
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
    "delete" : function(req,res){
        product.pop();
        res.send({"msg" : "Deleted Successfully"});
    }
}

module.exports = productobj;