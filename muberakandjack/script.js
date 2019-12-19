
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDKOjN72SLs7vgdeKBC7gTGoK-Jq2H02VY",
    authDomain: "rate-my-99552.firebaseapp.com",
    databaseURL: "https://rate-my-99552.firebaseio.com",
    projectId: "rate-my-99552",
    storageBucket: "rate-my-99552.appspot.com",
    messagingSenderId: "351406640147",
    appId: "1:351406640147:web:050b0cb3f38004743a43e6",
    measurementId: "G-JRK23851XB"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// Function that grabs data from the form and sends it to Firebase along with the current date and time

function FormSubmission(){
    var today = new Date();
    var timestamp = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + " " + today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
  
    var myDBConn = firebase.database().ref();
  
    var TempBranch = myDBConn.child("Rating");
  
    var currentTemp = document.getElementById("UserData");
  
    TempBranch.push({Rating: parseInt(currentTemp.value), Time:timestamp});
  
  
}
