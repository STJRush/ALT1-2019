
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDtyp4A16N1YsOmzmd8l61q_05LkADaTa0",
  authDomain: "webapptest-97c23.firebaseapp.com",
  databaseURL: "https://webapptest-97c23.firebaseio.com",
  projectId: "webapptest-97c23",
  storageBucket: "webapptest-97c23.appspot.com",
  messagingSenderId: "138034078385",
  appId: "1:138034078385:web:ae58de3951ece097e0b890",
  measurementId: "G-YWN4R79540"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// Function that grabs data from the form and sends it to Firebase along with the current date and time

function FormSubmission(){
    var today = new Date();
    var timestamp = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + " " + today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
  
    var myDBConn = firebase.database().ref();
  
    var TempBranch = myDBConn.child("MyTemperatures");
  
    var currentTemp = document.getElementById("UserData");
  
    TempBranch.push({Temperature: parseInt(currentTemp.value), Time:timestamp});
  
}

function FormSubmissionCyberT(){
  
    var myDBConn = firebase.database().ref();
  
    var TempBranch = myDBConn.child("Vote");
  
    var visitorName = document.getElementById("Submit");
  
    var carChoice = "CyberTruck";
  
    TempBranch.push({Person: parseInt(visitorName.value), Decision:carChoice});
  
}



var myTemps = [];
var myTimes = [];

var myDBConn = firebase.database().ref("MyTemperatures");


myDBConn.on("child_added", function(data, prevChildKey){
    var dataPoint = data.val();
  
    myTemps.push(dataPoint.Time);
    myTimes.push(dataPoint.Temperature);
  
    document.getElementById("TempID").innerHTML = myTemps[myTemps.length-1];
    document.getElementById("TimeID").innerHTML = myTimes[myTimes.length-1];
  
});
