(function(){
    "use strict";
    var db = firebase.firestore();
    var eventsRef = db.collection("events");
    function submit() {
        var eventName = document.getElementById("jumpmenu").value;
        var eventRef = eventsRef.doc(eventName).collection("attendees");
        eventRef.add({
            "First Name": document.getElementById("first-name").value,
            "Last Name": document.getElementById("last-name").value,
            "Email": document.getElementById("email").value,
            "Dietary Restrictions": document.getElementById("diet").value
        });
    }
})();
