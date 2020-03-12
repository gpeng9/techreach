firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
    } else {
        // User is signed out.
        var url = "index.html" 
        document.location.href = url
    }
});


var db = firebase.firestore();

function submitEvent() {
    alert('Please enter a password.');
}

$("#submit").click(function() {
    var title = document.getElementById("event-title").value;
    var description = document.getElementById("description").value;
    var date = new Date(document.getElementById("date").value);
    console.log(title);
    console.log(db.Timestamp);
    console.log(date);
    if (title !== "") {
        var name = (title + " - " + date.toLocaleDateString('en-US')).replace(/\//g, "|");
        db.collection("events").doc(name).set({
            "title": title,
            "description": description,
            "date": date.getTime() / 1000
        }, {merge: true})
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            alert("Event created");
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
});
