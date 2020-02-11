(function(){
    "use strict";
    // var admin = require("firebase-admin");
    // var functions = require("firebase-functions");
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBtfWIrfwMFGBs5l8lP3PJD_M0HvZQ8WTU",
        authDomain: "techreach-c2dd7.firebaseapp.com",
        databaseURL: "https://techreach-c2dd7.firebaseio.com",
        projectId: "techreach-c2dd7",
        storageBucket: "techreach-c2dd7.appspot.com",
        messagingSenderId: "1046089775227",
        appId: "1:1046089775227:web:ccaba146ceba2b790a8ade",
        measurementId: "G-8BPE70TRRH"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // admin.initializeApp(functions.config().firebase);
    firebase.analytics();
    // var db = admin.firestore();
    var db = firebase.firestore();
    var eventRef = db.collection("events").doc("event1");
    eventRef.update(JSON.stringify({"attendees": "none"}));
    eventRef.update({"attendees": "none"});
    /* eventRef.update({
        attendees: admin.firestore.FieldValue.arrayUnion({
            "First Name": "a",
            "Last Name": "b",
            "Email": "c",
            "Dietary Restrictions": "d"
        })
    }); */
    function submit() {
        /* eventRef.update({
            attendees: admin.firestore.FieldValue.arrayUnion({
                "First Name": document.getElementById("first-name").value,
                "Last Name": document.getElementById("last-name").value,
                "Email": document.getElementById("email").value,
                "Dietary Restrictions": document.getElementById("diet").value
            })
        }); */
    }
})();
