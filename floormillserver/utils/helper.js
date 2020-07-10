var fb = require('../config/firebaseconfig');

var allHotels = [];
var allDest = [];
var allAct = [];
var alltours = [];
var allCategory = [];

var obj = {


    snapshotToArray : (snapshot) => {
        var returnArr = [];

        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;

            returnArr.push(item);
        });

        return returnArr;
    },

    getAllHotels  :  function(){
        if(allHotels.length == 0)
        {
        return fb.db.ref("/masters/hotels/").once("value", snapshot => {
            allHotels = snapshotToArray(snapshot);
            return allHotels
        });
        }
        else
            return allHotels;
    },

    getAllDestinations  :  function(){
        if(allDest.length == 0)
        {
        return fb.db.ref("/masters/destinations/").once("value", snapshot => {
            allDest = snapshotToArray(snapshot);
            return allDest;
        });
        }
        else
            return allDest;

    },

    getAllActivities  :  function(){
        if(allAct.length == 0 ){
        return fb.db.ref("/masters/activities/").once("value", snapshot => {
            allAct = snapshotToArray(snapshot);
            return allAct;
        });
        }else{
            return allAct;
        }
    },

    getAllTours : function(){
        if(alltours.length == 0)
        {
        return fb.db.ref("/tours/").once("value", snapshot => {
            alltours = snapshotToArray(snapshot);
            return alltours;
        });
        }
        else
            return alltours;
    },

    getAllCategory : function(){
        if(allCategory.length == 0)
        {
        return fb.db.ref("/category/").once("value", snapshot => {
            allCategory = snapshotToArray(snapshot);
            return allCategory;
        });
        }
        else
            return allCategory;
    }
};

const snapshotToArray = (snapshot) => {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
}



module.exports = obj;

