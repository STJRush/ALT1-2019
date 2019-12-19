var firebaseConfig = {
    apiKey: "AIzaSyCeDmPZ-Gwq6Xh1gLdRwpF3tm5wi3b8Mdc",
    authDomain: "alt-1-9dfc0.firebaseapp.com",
    databaseURL: "https://alt-1-9dfc0.firebaseio.com",
    projectId: "alt-1-9dfc0",
    storageBucket: "alt-1-9dfc0.appspot.com",
    messagingSenderId: "481770449862",
    appId: "1:481770449862:web:2fdbfe9da5f45349c6a0c7",
    measurementId: "G-ER3VTBM7ZP"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var clickerButton = document.getElementById("UserData");
var onButtonClick = function() {
        clickerButton.textContent = "Thank You";
    };
clickerButton.addEventListener("click", onButtonClick);

// Function that grabs data from the form and sends it to Firebase along with the current date and time

function FormSubmission(){
    var today = new Date();
    var timestamp = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + " " + today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
  
    var myDBConn = firebase.database().ref();
  
    var TempBranch = myDBConn.child("ScaleData");
  
    var currentTemp = document.getElementById("UserData");
  
    TempBranch.push({Scale: parseInt(currentTemp.value), Time:timestamp});
  
  
}

var myTemps = [];
var myTimes = [];

var myDBConn = firebase.database().ref("ScaleData");


myDBConn.on("child_added", function(data, prevChildKey){
    var dataPoint = data.val();
  
    myTemps.push(dataPoint.Scale);
    myTimes.push(dataPoint.Temperature);
  
    document.getElementById("TempID").innerHTML = myTemps[myTemps.length-1];
    document.getElementById("TimeID").innerHTML = myTimes[myTimes.length-1];
  
});
function usersinput()
{
  var u_input =  document.getElementById("UserData");
  var theName = u_input.value;
  document.getElementById("user_input").innerHTML += theName;
}
