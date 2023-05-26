var questionText = document.querySelector("h1"); 
var pText = document.querySelector("p");
var startBtn = document.querySelector("#start");
var optionsContainer = document.querySelector(".options-container");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var displayEval = document.querySelector("#evaluation");
var secondsLeft = document.querySelector("#seconds");
var endForm = document.querySelector(".end-form");
var endSubmitBtn = document.querySelector("#endSubmit");
var time = 75;
var questionsAnswered = 0;
secondsLeft.textContent = time;

var questions = [
    {
        question: "Commonly used data types does NOT include:",
        choices: ['numbers', 'strings', 'booleans', 'alerts'],
        answer: 'alerts'
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses'
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 'console.log'
    },
];

function timer() {
    var timerInterval = setInterval(function() {
        time--;
        secondsLeft.textContent = time;

    }, 1000);

};

function changeQuestion() {
    if (questionsAnswered < questions.length) {
        optionsContainer.setAttribute("style", "display: flex");
        pText.textContent = "";
        startBtn.textContent = "";
        questionText.textContent = questions[questionsAnswered].question;
        option1.textContent = "1. " + questions[questionsAnswered].choices[0];
        option2.textContent = "2. " + questions[questionsAnswered].choices[1];
        option3.textContent = "3. " + questions[questionsAnswered].choices[2];
        option4.textContent = "4. " + questions[questionsAnswered].choices[3];
        questionsAnswered++;
    }

    else {
        clearInterval(timer);
        endScreen();
    }
};

// Evaluation Functions
function displayCorrect() {
    displayEval.textContent = "Correct!";
    changeQuestion();
};

function displayWrong() {
    time -= 5;
    displayEval.textContent = "Incorrect! Time deduction"
    changeQuestion();
};

// Option Selection Functions
function evaluateOption1() {
    displayWrong();
};

function evaluateOption2() {
    displayWrong();
};

function evaluateOption3() {
    if (questionsAnswered == 2 || questionsAnswered == 4) {
        displayCorrect(); 
    }

    else {
        displayWrong();
    }
};

function evaluateOption4() {
    if (questionsAnswered == 1 || questionsAnswered == 3 || questionsAnswered == 5) {      
        displayCorrect();
    }

    else {
        displayWrong();
    }
};

function endScreen() {
    endForm.setAttribute("style", "display: block");
    questionText.textContent = "Great Job!";
    pText.textContent = "Your final score is " + time;
    optionsContainer.setAttribute("style", "display: none");
}

endSubmitBtn.addEventListener("click", function() {
    var initialEntry = document.querySelector("#initial-entry").value;
        localStorage.setItem("initials", initialEntry);
        localStorage.setItem("score", time);

});

function startQuiz() {
    changeQuestion();
    timer();
}

startBtn.addEventListener("click", startQuiz);
option1.addEventListener("click", evaluateOption1);
option2.addEventListener("click", evaluateOption2);
option3.addEventListener("click", evaluateOption3);
option4.addEventListener("click", evaluateOption4);


// console.log(questions.length);
// console.log(questions[0].question);
//questionText.textContent = questions[0].question;


// questions[currentQuestion].choices
// questions[currentQuestion].question
// questions[currentQuestion].answer