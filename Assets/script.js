var submit = document.querySelector("#submit");
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
var timerEl = document.querySelector(".timer-count");
var score = document.querySelector("#score");
var quizBtn = document.querySelector("#startBtn");
var initials = "";
var q1MultiChoice1 = document.querySelector("#q1MultiChoice1");

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

//add timer
function startQuiz() {
  var timeLeft = 10;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' time remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      // displayMessage();
    }

  function populateQuestions (){

  };








// need 1st question to pop up: id q1MultiChoice AND list possible answers
  function question1 (q1AnswerA, q1AnswerB, q1AnswerC){
    q1MultiChoice.textContent = "What is this an example of: 'X', 'Y', 'X'?";
    q1AnswerA.textContent = "Numbers";
    q1AnswerB.textContent = "Array";
    q1AnswerC.textContent = "Function";

    if (score === 1){
      intro.textContent = "Correct, Yay!";
    } else {
      intro.textContent = "Nope!";
    }


  }
//       document.getElementById("q1").innerHTML = "What is this an example of: 'X', 'Y', 'X'?";
// //listen for user choice
//       document.getElementById("q1MultiChoice1").innerHTML = "Numbers";
//         if ("Numbers"){
//           // timeLeft--;
//         }
//       document.getElementById("q1MultiChoice2").innerHTML = "Array";
//       if ("Array"){
//       }
//       document.getElementById("q1MultiChoice3").innerHTML = "Function";
//         if ("Function"){
          // timeLeft--;
//yay if correct; oh no if incorrect
//if incorrect subtract time from timer
//loop again for next questions
        
  
//2nd question to pop up and list possible answers
    document.getElementById("q2").innerHTML = "Javascript is case sensitive?";
      document.getElementById("q2False").innerHTML = "False";
        if ("False"){
          // timeLeft--;
        }
      document.getElementById("q2True").innerHTML = "True";
        if ("True"){
//yay if correct; oh no if incorrect
//if incorrect subtract time from timer
        }


 //3rd question to pop up and list possible anwsers
    document.getElementById("q3").innerHTML = "Javascript is easy?";
      document.getElementById("q3False").innerHTML = "False";
        if ("False"){
          // timeLeft--;
        }
      document.getElementById("q3True").innerHTML = "True";
        if ("True"){
//yay if correct; oh no if incorrect
//if incorrect subtract time from timer
        }
      


      q1MultiChoice1.addEventListener("click", function(){ 
      });
    
  // WHEN DONE
    // calculate score
    // alert("Your score is " + score + "/" + quizQuestions.length);
    // save initials
    // save score  
    
  }, 1000);
};






//   var questions = [{
//     id: 0,
//     q: 'What is this an example of: "X", "Y", "X" ?',
//     a: [{ text: "Numbers", isCorrect: false },
//         { text: "Array", isCorrect: true },
//         { text: "Function", isCorrect: false }
//       ]
//   }]
// };

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

