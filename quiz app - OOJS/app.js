var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6", "2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

var quiz = new Quiz(questions); 

function populate(){
    
    if (quiz.isEnded())
    {
    // Show the scores
        showscores();
        
    } else {

    // Show Questions
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
    // Show Choices
    var choices = quiz.getQuestionIndex().choices;

    for(var i = 0; i < choices.length; i++)
        {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            userAnswer("btn" + i, choices[i]);
        }
    
    showProgress();    
        
    }
}

function userAnswer(id, userguess){

    var button = document.getElementById(id);
    
    button.onclick = function(){
        quiz.guess(userguess);
        populate();
    }
}

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + " " + currentQuestionNumber + " "  + "of" + " " + quiz.questions.length; 
}


function showscores() {

    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id='score'> Your Scores" + quiz.score +  "</h2>";

    var element = document.getElementById("quiz");    
    element.innerHTML = gameOverHtml;

}

populate();