// import { firestore } from './firebase.js';
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

var db = firebase.firestore()


var events = []

// var db = firestore
db.collection("events").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        var id = doc.id
        var data = doc.data()
        var attendees = data.attendees
        var description = data.description
        var name = data.name
        var date = data.date
        events.push({event_id: doc.id, attendees: attendees, description: description, name: name})
    });
    $.each(events, function (idx, event) {
        console.log(event)
        $("#tbody").append("<tr><td>" + event.name +"</td><td>" + event.description + "</td></tr>");
    });
});    