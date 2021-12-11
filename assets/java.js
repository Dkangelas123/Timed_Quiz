var questionEL = document.getElementById("question");
var menuEL = document.getElementById("main-menu");
var bodyEL = document.getElementById("questions-body");
var notimeEL = document.getElementById("initials");
var submitscoreEL = document.getElementById("subScore");
var returnMenu = document.getElementById("refresh");
var scoresRecord = document.getElementById("highscoreRecords");
var deleteScore = document.getElementById("clearScores");
var button1 = document.getElementById("a");
var button2 = document.getElementById("b");
var button3 = document.getElementById("c");
var button4 = document.getElementById("d");


var quizquestions = [{
  question: "Commonly used data types DO NOT include:",
  choice1: "strings",
  choice2: "booleans",
  choice3: "alert",
  choice4: "numbers",
  correctanswer: "c"},]


var lastquestion = quizquestions.length;
var runningquestion = 0;

function renderquiz(){
if(runningquestion === lastquestion){
  return runOut();
}

  var currentQuest = quizquestions[runningquestion];
  questionEL.innerHTML = "<p>" + currentQuest.question + "<p>";
  button1.innerHTML = currentQuest.choice1;
  button2.innerHTML = currentQuest.choice2;
  button3.innerHTML = currentQuest.choice3;
  button4.innerHTML = currentQuest.choice4;

}


function startquiz() {
  deleteScore.style.display = "none"
menuEL.style.display = "none"
notimeEL.style.display = "none"
submitscoreEL.style.display="none"
bodyEL.style.display =""

  
var timer2 = ": 0";
var interval = setInterval(function() {
  var timer = timer2.split(':');
  var seconds = parseInt(timer[1], 10);
  --seconds;
    seconds = (seconds < 0) ? 70 : seconds;
 
    if ( seconds === 0){
      
      bodyEL.style.display="none"
      notimeEL.style.display="";
      submitscoreEL.style.display="";
     
 }
 
  $('#timer').html('Time:' + seconds);
  timer2 =': ' + seconds;
}, 1000);


generatequestions()

function runOut (){
  bodyEL.style.display="none"
  notimeEL.style.display="";
  submitscoreEL.style.display="";
}
 
}
bodyEL.style.display="none"
submitscoreEL.style.display="none"
notimeEL.style.display = "none"
returnMenu.style.display = "none"
scoresRecord.style.display= "none"
deleteScore.style.display = "none"

function viewHighscores(){
    
  menuEL.style.display = "none"
  scoresRecord.style.display =""
  returnMenu.style.display = ""
  deleteScore.style.display = ""

  
    
   
    
}

var again = function(){
    window.location.reload();
}








document.getElementById("highscore").addEventListener("click", viewHighscores);



document.getElementById("refresh").addEventListener("click", again);

document.getElementById("btn").addEventListener("click", startquiz);



