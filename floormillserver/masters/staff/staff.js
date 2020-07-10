var fbref = require('../../utils/utils');

var staff = [
    {"name":"abc", "age":25, "contact": 1234567890,"address":"xyz","pin" : 440002},
    {"name":"xyz", "age":27, "contact": 1234567890,"address":"abc", "pin": 440012}
];


var path = "/masters/staff";

var staffobj = {
    "getAll" : function(req,res){
        fbref.getAllObjects(path).then(success => {
            res.send(success);
        }).catch(error => {  
            res.send(error);
        });
    },
    "add": function(req,res){
        var stObj = req.body;
        fbref.addObject(path,stObj).then(success => {
            res.send(success);
        }).catch(error => {
            res.send(error);
        });
    },
    "update" : function(req,res) {
        var stObj = req.body;
        fbref.updateObject(path,stObj.key,stObj).then(success => {
            res.send(success);
        }).catch(error => {
            res.send(error);
        });
    },
    "delete": function(req,res){
            staff.pop();
            res.send({"msg":" staff deleted successfully"});
    },
    "sortByName": function(req,res){
            var staffarr = staff.sort(function(a,b){
                if(a.name > b.name)
                    return 1;
                if(a.name < b.name)
                    return -1;
                if(a.name = b.name)
                    return 0;            
        });
        res.send(staffarr);
    },
    "filterBypin": function(req,res){
            let f = req.body.rnofilter;
            var staffarr = staff.filter(function(x){
                if(x.rno >= f)
                    return x;
            });
            res.send(staffarr);
        },
    "findByid" : function(req,res){
            console.log(req.query);
            let id = req.query.id;
            fbref.getObjectById(path,id).then(success=>{
                res.send(success);
            }).catch(error=> {
                res.send(error);
            })
        }
    };
    
module.exports=staffobj;