(function(){
    "use strict";
    var db = firebase.firestore();
    var eventsRef = db.collection("events");
    var form = document.getElementById("form");
    var jumpMenu = document.getElementById("jumpmenu");
    form.onsubmit = function() {
        var eventName = jumpMenu.value;
        if (eventName !== "") {
            var eventRef = eventsRef.doc(eventName).collection("attendees");
            eventRef.add({
                "name": document.getElementById("first-name").value + " " + document.getElementById("last-name").value,
                "caltech_uid": document.getElementById("uid").value,
                "email": document.getElementById("email").value,
                "diet": document.getElementById("diet").value
            });
        }
    };
    eventsRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var data = doc.data();
            // We only want to list events that haven't happened yet
            // Date.now() is in milliseconds, data.date is in seconds
            if (Date.now()/1000 < data.date) {
                var option = document.createElement("option");
                option.text = data.title;
                jumpMenu.options.add(option);
            }
        });
    });
})();
