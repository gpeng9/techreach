// import { firestore } from './firebase.js';
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

var db = firebase.firestore()


var events = []

// var db = firestore
db.collection("events").get().then(function(querySnapshot) {
    var row = 0
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        var id = doc.id
        var data = doc.data()
        var description = data.description
        var title = data.title
        var date = new Date(data.date*1000)
        events.push({event_id: doc.id, description: description, title: title, date: date})
        $("#tbody").append("<tr style='border: 1px solid black' id = " + id + "><td>"+ date.toLocaleDateString('en-US') + "</td><td>" + title +"</td><td>" + description + "</td></tr>");
        row += 1
    });
});    

$("#table").on('click','tr',function(e) { 
    console.log(this.id)
    var URIComponent = encodeURIComponent(this.id)
    localStorage.setItem('URIComp', URIComponent)

    var url = "individualEvent.html?event_id=" + encodeURIComponent(this.id)
    document.location.href = url
}); 