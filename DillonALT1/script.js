
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBAUOlpmMd_jYImiVWlDd3body2uJ4gBjE",
  authDomain: "alt1-react.firebaseapp.com",
  databaseURL: "https://alt1-react.firebaseio.com",
  projectId: "alt1-react",
  storageBucket: "alt1-react.appspot.com",
  messagingSenderId: "314202354727",
  appId: "1:314202354727:web:bcf9b0abd806e510c20a02",
  measurementId: "G-FKHR276Q8N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



var topScore = [];

var myDBConn = firebase.database().ref("alt-react");

//gets the highest score from the database
myDBConn.on("child_added", function(data, prevChildKey){
    var dataPoint = data.val();
  
    topScore.push(dataPoint.ReactionTime);
  
  topScore.sort(function(a,b){return b-a});
  
    document.getElementById("TopID").innerHTML = topScore[topScore.length-1]; 
  
    document.getElementById("firstID").innerHTML = topScore[1];
    document.getElementById("secondID").innerHTML = topScore[2];
    document.getElementById("thirdID").innerHTML = topScore[3];
});
