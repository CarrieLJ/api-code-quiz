// var quizQuestions = [
//     {
//         prompt: "What is this an example of: 'X', 'Y', 'X'?"\n(a) Numbers\n\(b) Array\n(c) Funtion",
//         answer: "b"
//     }
// ]

// var score = 0;

// for (var i = 0; i < quizQuestions.length; i++){
//     var userPick = window.prompt(quizQuestions [i].prompt);
//     if (userpick === quizQuestions[i].answer){
//         score++;
//         alert("Correct, Yay!");
//     } else {
//         alert("Nope!");
//     }
// }
// alert("Your score is " + score + "/" + quizQuestions.length);






// var i=0;

// quizQuestions = [
//     ["What is this an example of: 'X', 'Y', 'X'?", "Numbers", "Array", "Funtion", "2"],
//     ["Is javascript case sensitive?", "True", "False", "1"],
//     ["Is javascript easy?", "True", "False", "2"],
//     ];
    
//     function populateQuestion () {
//         document.getElementById("quiz-questions")=quizQuestions[0][0];
//         q1MultiChoice.q1AnswerA.value=quizQuestions[i][1];
//         q1MultiChoice.q1AnswerB.value=quizQuestions[i][2];
//         q1MultiChoice.q1AnswerC.value=quizQuestions[i][3];
//     };

//     function nextQuestion(){
//         i=i+1;
//         populateQuestion ();
//     }

//     function checkAnswer(a){
//         answer=parseInt(quizQuestions[i][5]);
//         if(answer===a){
//             alert("Correct, Yay!");
//         } else{
//             alert("Nope!");
//         }
//     }