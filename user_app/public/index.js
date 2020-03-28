(function(){
    "use strict";
    // Initialize database
    var db = firebase.firestore();
    var eventsRef = db.collection("events");
    var form = document.getElementById("form");
    var jumpMenu = document.getElementById("jumpmenu");
    // Converts a Unix time (in milliseconds) to standard date format
    // "date" is a Date object
    function standardDate(date) {
        return date.toLocaleDateString('en-US');
    }
    // Adds submitted information to the database
    form.onsubmit = function() {
        // Need to replace all forward slashes in the event name because they
        // would be interpreted as database path delimiters
        var eventName = jumpMenu.value.replace(/\//g, "|");
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
    // Pulls the events list from the database and displays the ones that have
    // not happened yet in the dropdown
    eventsRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var data = doc.data();
            // We only want to list events that haven't happened yet
            // Date.now() is in milliseconds, data.date is in seconds
            if (Date.now()/1000 < data.date) {
                var option = document.createElement("option");
                var date = new Date(data.date * 1000);
                // Event names include both event title and date
                option.text = data.title + " - " + standardDate(date);
                jumpMenu.options.add(option);
            }
        });
    });
})();
