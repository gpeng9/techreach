(function(){
    "use strict";
    var db = firebase.firestore();
    var eventsRef = db.collection("events");
    var form = document.getElementById("form");
    form.onsubmit = function() {
        var eventName = document.getElementById("jumpmenu").value;
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
    var jumpMenu = document.getElementById("jumpmenu");
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
    jumpMenu.onchange = function() {
        if (document.form.jumpmenu.value !== "") {
            document.location.href = document.form.jumpmenu.options[document.form.jumpmenu.options.selectedIndex].value;
        }
    };
})();
