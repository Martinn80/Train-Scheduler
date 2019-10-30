$(document).ready(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyCjfLUeitBvt56m73UgXR-nopVfMroFlDo",
        authDomain: "trainscheduler-a6249.firebaseapp.com",
        databaseURL: "https://trainscheduler-a6249.firebaseio.com",
        projectId: "trainscheduler-a6249",
        storageBucket: "trainscheduler-a6249.appspot.com",
        messagingSenderId: "1080918630214",
        appId: "1:1080918630214:web:ae440a58360b48b6430f47"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const database = firebase.database();

    database.ref().on('value', snap => {
        console.log(snap.val());

    })
})