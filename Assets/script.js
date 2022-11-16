//need to create quiz in either css or html...
var submit = document.querySelector("#submit");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerEl = document.querySelector(".timer-count");
var score = document.querySelector("#score");
var quizBtn = document.querySelector("#startBtn");
//add other variables??

//need this for scoring?
// function renderLastRegistered() {
//   var initials = localStorage.getItem("initials");
//   var score = localStorage.getItem("score");
// };

//add button to start quiz
quizBtn.addEventListener("click", function(event){
  event.preventDefault(); 
  startQuiz();

  // if (question1 === True){
  //   //add something here to add on to score
  // }
});

function startQuiz(){
  quizBtn.disabled = true;

  // Select first question
  // Populate possible answers
  // Wait/listen for user choice
  // Was it correct?
  // if yes
    // display YAY or make a sound or something good
  // if no
    // display BOO or make a sound or something bad
    // ALSO subtract time from the timer
  // LOOP AGAIN

  // WHEN DONE
    // calculate score
    // save initials
    // save score
};

//add mutiple choice questions

// The init function is called when the page loads 
function init() {
    getWins();
    getlosses();
  }



//create questions for quiz

//use this at the end to save initials and score:
// localStorage.setItem("initials", initials);
// localStorage.setItem("score", score);
// renderLastRegistered();


  










