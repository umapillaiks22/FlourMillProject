var fb = require('../config/firebaseconfig');
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

    getAllObjects  :  (path)  => {
        return fb.db.ref(path).orderByChild('lastUpdatedOn').once("value", snapshot => {
            let retArr = snapshotToArray(snapshot);
            // console.log(retArr);
            retArr = retArr.sort((a,b) => {
                return a.lastUpdatedOn - b.lastUpdatedOn;
            });
            console.log(retArr);
            return retArr;
        });
    },

    getAllObjectSnapshots : (path) => {
        return fb.db.ref(path).once("value", snapshot => {
            return snapshot;
        });
    },

    addObject : (path,obj1) => {
        let obj = obj1;
        obj.createdOn = new Date().toDateString();
        obj.lastUpdatedOn = obj.createdOn; 
        return fb.db.ref(path).push(obj);
    },

    getObjectById : (path, id) => {
        return fb.db.ref(path).child(id).once("value", snapshot => {
           // console.log(snapshot.val());
            return snapshot.val();
        });
    },

    getObjectByKey : (path, key, value) => {
        return fb.db.ref(path).orderByChild(key).equalTo(value).once("value", snapshot => {
            return snapshot.val();
        })
    },
    updateObject: (path, id, obj) => {
        obj.lastUpdatedOn = new Date().toDateString();
        return fb.db.ref(path).child(id).update(obj);
    },
    deleteObject: (path,id) => {
        let delObj = {
            disabled : true
        }
        return fb.db.ref(path).child(id).update(delObj);
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