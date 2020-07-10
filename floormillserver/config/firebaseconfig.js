var fb = require('firebase');
var fbconf = {
  apiKey: "AIzaSyBCJFq-gTC3m9pML2dW01E2i-KcoT_hw5E",
    authDomain: "floormillproject.firebaseapp.com",
    databaseURL: "https://floormillproject.firebaseio.com",
    projectId: "floormillproject",
    storageBucket: "floormillproject.appspot.com",
    messagingSenderId: "390603983153",
    appId: "1:390603983153:web:1f0dea1653db80efe88810",
    measurementId: "G-V9P8TNTG1C"


  };
fb.initializeApp(fbconf);
var fbobj = {
    "db" : fb.database()
}
module.exports = fbobj;