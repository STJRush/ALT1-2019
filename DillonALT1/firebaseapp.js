  var firebaseConfig = {
    apiKey: "AIzaSyA3WCJhAvdAwmMVxPWG9i_MyAPFrlyLYHY",
    authDomain: "alt1-minigame.firebaseapp.com",
    databaseURL: "https://alt1-minigame.firebaseio.com",
    projectId: "alt1-minigame",
    storageBucket: "alt1-minigame.appspot.com",
    messagingSenderId: "215352167144",
    appId: "1:215352167144:web:fa081da593f0391517975d",
    measurementId: "G-QEKDJ9V3C5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Function that grabs data from the form and sends it to Firebase along with the current date and time

function FormSubmission(){
    var today = new Date();
    var timestamp = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + " " + today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
  
    var myDBConn = firebase.database().ref();
  
    var ScoreBranch = myDBConn.child("Score");
  
    var currentScore = document.getElementById("UserData");
  
    ScoreBranch.push({Score: parseInt(currentScore.value), Time:timestamp});
  
  
}

var miniScore = [];

var myDBConne = firebase.database().ref("alt1-minigame");

//gets the highest score from the database
myDBConne.on("child_added", function(data, prevChildKey){
    var dataPoint = data.val();
  
    miniScore.push(dataPoint.Score);
  
  miniScore.sort(function(a,b){return b-a});
  
    document.getElementById("MiniID").innerHTML = miniScore[miniScore.length-1]; 
});
