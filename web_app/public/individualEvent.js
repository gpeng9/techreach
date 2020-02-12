// import { firestore } from './firebase.js';
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

var db = firebase.firestore()

// var queryString = location.search.substring(1);

var attendees = []
var URIComp = localStorage.getItem("URIComp")
var URI = "events/" + URIComp + "/attendees"

// var db = firestore
db.collection(URI).get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        var id = doc.id
        var data = doc.data()
        var uid = doc.id
        var name = data.name
        var email = data.email
        var caltechUid = data.caltech_uid
        var diet = data.diet

        attendees.push({attendee_id: doc.id, uids: uid, names: name, emails: email, 
            caltech_uids: caltechUid, diets: diet})

        console.log(attendees)
        $("#tbody").append("<tr><td>" + uid + "</td><td>" + name + "</td><td>" 
            + email + "</td><td>" + caltechUid + "</td><td>" + diet + "</td></tr>" );
    });
   
}); 