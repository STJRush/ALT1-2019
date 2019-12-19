  // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAvpNjAagU0UsR64mgmsI9kYItaNuczD_k",
    authDomain: "compscijs-29efb.firebaseapp.com",
    databaseURL: "https://compscijs-29efb.firebaseio.com",
    projectId: "compscijs-29efb",
    storageBucket: "compscijs-29efb.appspot.com",
    messagingSenderId: "421452228137",
    appId: "1:421452228137:web:2734bba8aa979e190b9e38",
    measurementId: "G-47GCPLE4VY"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



// Function that grabs data from the form and sends it to Firebase along with the current date and time

function FormSubmission(){
    var today = new Date();
    var timestamp = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + " " + today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
  
    var myDBConn = firebase.database().ref();
    var TempBranch = myDBConn.child("CarRatings");
  
    var currentRate = document.getElementById("UserData");
    TempBranch.push({Rating: parseInt(currentRate.value)});

    var myDBConn = firebase.database().ref();
    var TempBranch = myDBConn.child("Colours");

    var coloury = document.getElementById("UserDat");
    TempBranch.push({Colour: coloury.value, Rating: currentRate});
  
};


function FormSubmission2(){

 var myDBConn = firebase.database().ref();
    var TempBranch = myDBConn.child("Cars");

    var cars = document.getElementById("UserDa");
    TempBranch.push({Cary: cars.value});
}
