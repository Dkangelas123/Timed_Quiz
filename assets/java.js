var bodyEL = document.getElementById("questions-body");
var menuEL = document.getElementById("main-menu");
var questionsEL = document.getElementById("questions-body");
var notimeEL = document.getElementById("initials");
var submitscoreEL = document.getElementById("subScore");
var button1 = document.getElementById("a");
var button2 = document.getElementById("b");
var button3 = document.getElementById("c");
var button4 = document.getElementById("d");


function startquiz() {
menuEL.style.display = "none"
notimeEL.style.display = "none"
submitscoreEL.style.display="none"

  
var timer2 = ": 0";
var interval = setInterval(function() {
  var timer = timer2.split(':');
  var seconds = parseInt(timer[1], 10);
  --seconds;
    seconds = (seconds < 0) ? 2 : seconds;
 
    if ( seconds === 0){
      
      notimeEL.style.display="";
      
      
 }
 
  $('#timer').html('Time:' + seconds);
  timer2 =': ' + seconds;
}, 1000);




 
}
function viewHighscores(){
    document.getElementById("what").innerHTML = "<p style= 'text-align: center;'> hello world</p>";
    document.getElementById("H1").innerHTML = "";
    document.getElementById("btn").innerHTML = "";
   
    document.getElementById("highscore").innerHTML = "<button id= backs; style= 'text-align: center;'> Back </button>";
}

var again = function(){
    location.reload();
}





document.getElementById("btn").addEventListener("click", startquiz);
document.getElementById("highscore").addEventListener("click", viewHighscores);
document.getElementById("backs").addEventListener("click", again);











