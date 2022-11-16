//need to create quiz in either css or html...
var submit = document.querySelector("#submit");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerEl = document.querySelector(".timer-count");
var score = document.querySelector("#score");
var quizBtn = document.querySelector("#startBtn");
var initials = "";

var q1MultiChoice = 'What is this an example of: "X", "Y", "X" ?';
var q2TrueFalse = 'Javascript is case sensitive?';
var q3TrueFalse = 'Javascript is easy?';

// var initialsScores = [];


//add button to start quiz
quizBtn.addEventListener("click", function(event){
  event.preventDefault(); 
  startQuiz();
  quizBtn.disabled = true;
});

function startQuiz() {
  var timeLeft = 15;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' time remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      // displayMessage();
    }
  }, 1000);

  var questions = [{
    id: 0,
    q: 'What is this an example of: "X", "Y", "X" ?',
    a: [{ text: "Numbers", isCorrect: false },
        { text: "Array", isCorrect: true },
        { text: "Function", isCorrect: false }
      ]
  }]
};

// //use this at the end to save initials and score:
// localStorage.setItem("initials", initials);
// localStorage.setItem("score", score);
// renderLastScore();


//   q1MultiChoice2.addEventListener("click", function(){ 
//     if (q1MultiChoice2){
//       alert("Great job!");
//     }else {
//       alert("NOPE!");
//     }
//   });
  
//   q2TrueFalse.addEventListener("click", function(){ 
//     if (True){
//       alert("Great job!");
//     }else {
//       alert("NOPE!");
//     }
//   });
  
//   q3TrueFalse.addEventListener("click", function(){ 
//     if (False){
//       alert("Great job!");
//     }else {
//       alert("NOPE!");
//     }
//   });
// }

//need this for scoring?
// function renderLastRegistered() {
//   var initials = localStorage.getItem("initials");
//   var score = localStorage.getItem("score");
// };

// function displayMessage() {
//   var wordCount = 0;

//   // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var msgInterval = setInterval(function () {
//     // If there are no more words left in the message
//     if (words[wordCount] === undefined) {
//       // Use `clearInterval()` to stop the timer
//       clearInterval(msgInterval);
//     } else {
//       // Display one word of the message
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 1000);
// }

// q1MultiChoice2.addEventListener("click", function(){ 
//   if (q1MultiChoice2){
//     alert("Great job!");
//   }else {
//     alert("NOPE!");
//   }
// });

// q2TrueFalse.addEventListener("click", function(){ 
//   if (True){
//     alert("Great job!");
//   }else {
//     alert("NOPE!");
//   }
// });

// q3TrueFalse.addEventListener("click", function(){ 
//   if (False){
//     alert("Great job!");
//   }else {
//     alert("NOPE!");
//   }
// });
  
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


//add mutiple choice questions

// The init function is called when the page loads 
// function init() {
//     getWins();
//     getlosses();
//   }







