var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");
var questionCont = document.getElementById("question-container");
var beforeStart = document.getElementById("before-start");
var questionOne = document.getElementById("question-1");
var choiceOne = document.getElementById("choiceOne")
var choiceTwo = document.getElementById("choiceTwo")
var choiceThree = document.getElementById("choiceThree")
var choiceFour = document.getElementById("choiceFour")
var questionIndex = 0;
var timeLeft = 75;

var listOfQuestions = [
    {
        questionHead: "1. Commonly used data types do NOT include:",
        choiceOne: "1. Strings",
        choiceTwo: "2. Booleans",
        choiceThree: "3. Alerts",
        choiceFour: "4. Numbers",
        
    },
    {
        questionHead: "2. The condition in an if / else statemnt is enclosed with:",
        choiceOne: "1. Quotes",
        choiceTwo: "2. Curly brackets",
        choiceThree: "3. Parenthesis",
        choiceFour: "4. Square brackets",
    },
    {
        questionHead: "3. Arrays in JavaScript can be used to store:",
        choiceOne: "1. Numbers and strings",
        choiceTwo: "2. Other arrays",
        choiceThree: "3. Booleans",
        choiceFour: "4. All of the above",
    },
    {
        questionHead: "4. A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceOne: "1. JavaScript",
        choiceTwo: "2. Terminal / Bash",
        choiceThree: "3. For loops",
        choiceFour: "4. Console.log",
    },
    {
        questionHead: "5. String values must be enclosed within _______ when being assigned to variables.",
        choiceOne: "1. Commas",
        choiceTwo: "2. Curly brackets",
        choiceThree: "3. Quotes",
        choiceFour: "4. Parenthesis",
    }
];

choiceOne.addEventListener("click",function(){
    questionIndex++;
    showQuestions();
});
choiceTwo.addEventListener("click",function(){
    questionIndex++;
    showQuestions();
});
choiceThree.addEventListener("click",function(){
    questionIndex++;
    showQuestions();
});
choiceFour.addEventListener("click",function(){
    questionIndex++;
    showQuestions();
});

function showQuestions(){
    questionOne.textContent = listOfQuestions[questionIndex].questionHead;
    choiceOne.textContent = listOfQuestions[questionIndex].choiceOne;
    choiceTwo.textContent = listOfQuestions[questionIndex].choiceTwo;
    choiceThree.textContent = listOfQuestions[questionIndex].choiceThree;
    choiceFour.textContent = listOfQuestions[questionIndex].choiceFour;
}

function startGame() {
    var gameInterval = setInterval(() => {
        timerSpan.textContent = timeLeft--;
        if (!timeLeft) {
            clearInterval(gameInterval);
            window.location.href = "highscore.html";
        }
    }, 1000);

    beforeStart.style.display = "none";
    questionCont.style.display = "block";
    showQuestions();
}

startButton.addEventListener("click", startGame);