(function(){
    "use strict";
    var db = firebase.firestore();
    var eventsRef = db.collection("events");
    var form = document.getElementById("form");
    form.onsubmit = function() {
        var eventName = document.getElementById("jumpmenu").value;
        var eventRef = eventsRef.doc(eventName).collection("attendees");
        var email = document.getElementById("email").value;
        eventRef.doc(email).set({
            "name": document.getElementById("first-name").value + " " + document.getElementById("last-name").value,
            "caltech_uid": document.getElementById("uid").value,
            "email": email,
            "diet": document.getElementById("diet").value
        });
    };
    var jumpMenu = document.getElementById("jumpmenu");
    jumpMenu.onchange = function() {
        if (document.form.jumpmenu.value != null) {
            document.location.href = document.form.jumpmenu.options[document.form.jumpmenu.options.selectedIndex].value;
        }
    };
})();
