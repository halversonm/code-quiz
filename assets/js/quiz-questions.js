var questionText = document.querySelector("h1"); 
var pText = document.querySelector("p");
var startBtn = document.querySelector("#start");
var answerList = document.querySelector("ol");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var displayEval = document.querySelector("#evaluation");
var questionsAnswered = 0;

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

function changeQuestion() {
    if (questionsAnswered < questions.length) {
        pText.textContent = "";
        startBtn.textContent = "";
        questionText.textContent = questions[questionsAnswered].question;
        option1.textContent = "1. " + questions[questionsAnswered].choices[0];
        option2.textContent = "2. " + questions[questionsAnswered].choices[1];
        option3.textContent = "3. " + questions[questionsAnswered].choices[2];
        option4.textContent = "4. " + questions[questionsAnswered].choices[3];
        console.log(questionsAnswered);
    }

    else {
        return;
    }
};

// Evaluation Functions
function displayCorrect() {
    displayEval.textContent = "Correct!";
    changeQuestion();
};

function displayWrong() {
    displayEval.textContent = "Inorrect! Time deduction"
    changeQuestion();
};

// Option Selection Functions
function evaluateOption1() {
    questionsAnswered++;
    displayWrong();
};

function evaluateOption2() {
    questionsAnswered++;
    displayWrong();
};

function evaluateOption3() {
    if (questionsAnswered == 1 || questionsAnswered == 3) {
        questionsAnswered++;
        displayCorrect(); 
    }

    else {
        questionsAnswered++;
        displayWrong();
    }
};

function evaluateOption4() {
    if (questionsAnswered == 0 || questionsAnswered == 2 || questionsAnswered == 4) {
        questionsAnswered++;
        displayCorrect();
    }

    else {
        questionsAnswered++;
        displayWrong();
    }
};

startBtn.addEventListener("click", changeQuestion);
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