"use strict";

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
firebase.analytics();

const element = document.getElementById("dropdown");
const root = document.getElementById("root");
