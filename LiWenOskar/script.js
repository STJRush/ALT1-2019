var points = 0;
var endNumber = false;
var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(700, 400); 
        frameRate(30);
        background(250,250,250);
        
       
        // ProgramCodeGoesHere
        
        //Startscreen
        var numberOfMouseClicks = 0;
        var startScreen = function(){
          background(50,180,0);
          textSize(40);
          text('Press to start', 235, 200);
          textSize(14);
          text('Instructions to play: Press on the shapes', 227, 240)
        };
        startScreen.prototype.clicked = function(){
          background(250,250,250);
          numberOfMouseClicks = 1;
          square = new Square(random(0,255), random(0,255), random(0,255));
          square.draw();
        };
        
        //Shapes
        var x = 0;
        var y = 0;
        
        //Square object
        var Square = function(red,green,blue){
          x = random(0, 599);
          y = random(10, 275);
          size = random(70, 100);
          this.red = red;
          this.green = green;
          this.blue = blue;
        };
        Square.prototype.draw = function(){
          noStroke();
          fill(this.red, this.green, this.blue);
          rect(x, y, size, size);  

        };  
        Square.prototype.clicked = function(){
          if (numberOfMouseClicks === 1){
            if (mouseX > x && mouseX < x + size && mouseY > y && mouseY < y + size){
            background(250,250,250);
            square = new Square(random(0,255), random(0,255), random(0,255));
            square.draw();
            points++;
            fill(20, 20, 20)
            text('score: ' + points, 640, 10);
            }
          }
        };
        
        //MousePressed function
        mousePressed = function() {
          if (numberOfMouseClicks < 1){
            startscreen.clicked();
            startTimer = millis();
            text('score: ' + points, 640, 10);
          }
          square.clicked();         
        };
       
       
        /*****************
           Main Program
        ******************/
        var startTimer = 0;
        var startscreen = new startScreen();
        var square = new Square();
       
       
        //timer length (change duration to change timer)
        var duration = 20;
        var time = 20;
        var length = 0;
        
        //timer function
        draw = function() { 
          if (numberOfMouseClicks === 1){
            if (time > 0){
              //timer background
              fill(250,250,250);
              rect(350,380,40,10);
              //timer
              time = duration - ((millis()-startTimer)/1000);
              fill(100,50,255);
              text((round(time*10)/10) + 's', 350, 390);
              //progress bar outline
              fill(250,250,250);
              stroke(1);
              rect(0,0,639,10);
              //progress bar
              fill(0,0,250);
              noStroke();
              length += 1.054;
              rect(0,0,length,10);
            } 
            //when timer ends
            else{
              background(250,250,250);
              x = -100;
              y = -100;
              fill(0,0,0);
              var CS = createFont('comic sans ms');
              textFont(CS, 30);
              text("Your score is " + points, 260, 190);
              // Asks name
              if (endNumber === false){
              var person = prompt("Please enter your name", "Anonymous");
              var nameSaved = false;
              endNumber = true;
              }
              // Post to Firebase  
              if (person != null && endNumber === true && nameSaved == false) {
                var myDBConn = firebase.database().ref();
                var ScoreBranch = myDBConn.child("Scores");
                ScoreBranch.push({ Score : parseInt(points), person});
                nameSaved = true;
                numberOfMouseClicks = 2
              }
              else if (person == null && endNumber === true && nameSaved == false){
                person = 'Anonymous'
                var myDBConn = firebase.database().ref();
                var ScoreBranch = myDBConn.child("Scores");
                ScoreBranch.push({ Score : parseInt(points), person});
                nameSaved = true;
                numberOfMouseClicks = 2
              }
            }
          }  
        };        
}};


    // Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc); 



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyArVNc5x9CyJygy95ch6uEEgNoGj92uGqw",
    authDomain: "alt1-d9a0c.firebaseapp.com",
    databaseURL: "https://alt1-d9a0c.firebaseio.com",
    projectId: "alt1-d9a0c",
    storageBucket: "alt1-d9a0c.appspot.com",
    messagingSenderId: "821069872704",
    appId: "1:821069872704:web:65a9a8fa5ab481c39ae9a5",
    measurementId: "G-HLBD8HZPRL"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var topScore = [];

var myDBConn = firebase.database().ref("Scores");

myDBConn.on("child_added", function(data, prevChildKey){
    var dataPoint = data.val();
  
    topScore.push([dataPoint.Score, dataPoint.person]);

    var sortedArray = topScore.sort(function(a, b) {
      return b[0] - a[0];
});

  
    document.getElementById("FirstScore").innerHTML = topScore[0][0];
    document.getElementById("FirstName").innerHTML = topScore[0][1];

    document.getElementById("SecondScore").innerHTML = topScore[1][0];
    document.getElementById("SecondName").innerHTML = topScore[1][1];
  
    document.getElementById("ThirdScore").innerHTML = topScore[2][0];
    document.getElementById("ThirdName").innerHTML = topScore[2][1];
  
    document.getElementById("ForthScore").innerHTML = topScore[3][0];
    document.getElementById("ForthName").innerHTML = topScore[3][1];
  
    document.getElementById("FifthScore").innerHTML = topScore[4][0];
    document.getElementById("FifthName").innerHTML = topScore[4][1];
  
    document.getElementById("SixthScore").innerHTML = topScore[5][0];
    document.getElementById("SixthName").innerHTML = topScore[5][1];
  
    document.getElementById("SeventhScore").innerHTML = topScore[6][0];
    document.getElementById("SeventhName").innerHTML = topScore[6][1];
  
    document.getElementById("EighthScore").innerHTML = topScore[7][0];
    document.getElementById("EighthName").innerHTML = topScore[7][1];

  
    document.getElementById("NinthScore").innerHTML = topScore[8][0];
    document.getElementById("NinthName").innerHTML = topScore[8][1];

  
    document.getElementById("TenthScore").innerHTML = topScore[9][0];  
    document.getElementById("TenthName").innerHTML = topScore[9][1];

  
  
    console.log(sortedArray)
  
    }); 
