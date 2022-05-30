// Elements from the html
var questionsCont = document.querySelector("#questions-container")
var proceed = document.querySelector("#proceed");
var choicesEl = document.querySelector("#questionsChoices");
var submitBtn = document.querySelector("#submit");
var answer = document.querySelector("#answer");


// Questions 
var listQuestions = [
    {
      question: "What do you most love to do in your free time?",
      choices: [
          "Spend time with my family",
          "Play video games",
          "Listen to music",
          "Go to a club",
          "Exercise",
          "Hang out with friends",
          "Watch a good movie",
          "Read a book"
            ],
    },
    {
      question: "What are you looking for in someone?",
      choices: [
        "I want a close relationship",
        "I want something casual",
        "I want an open relationship",
        "I just want to hang out for a night"
      ],
    },
    {
      question: "What is your favorite music genre?",
      choices: [
          "Pop", 
          "Rock", 
          "Rap", 
          "R&B",
          "Indie", 
          "Jazz", 
          "Reggae", 
          "Electronic",
          "Hip hop", 
          "Country",
        ],
    },
    {
      question: "Which of the following is a BIG NO on the first date?",
      choices: [
        "Talking about an ex",
        "Talking about sex",
        "Continuously texting",
        "Turning a date into a therapy session",
        "Speak too much of yourself",
        "Don't pay attention to what the other person is saying",
      ],
    },
    {
      question:
        "What is one activity that you would like to do on a date?",
      choices: [
        "Go to a movie theater",
        "Go to a restaurant",
        "Go to a club",
        "Go to a park",
        "Go bowling together",
        "Attend a play or musical event together",
        "Attend a local sports event",
        "Go to a bar"
      ],
    },
    {
      question: "How do you define your personality?",
      choices: [
        "Extrovert",
        "Sensor",
        "Introvert",
        "Feeler",
        "Intuitive",
        "Perceiver",
        "Judger",
        "Thinker"

      ],
    },
    {
      question: "What is your sign?",
      choices: [
          "Aries",
          "Taurus",
          "Gemini",
          "Cancer",
          "Leo",
          "Virgo",
          "Libra",
          "Scorpio",
          "Sagittarius",
          "Capricorn",
          "Aquarius",
          "Pisces",
            ],
    },
    {
      question: "If the person wants to sleep with you in the first date, what would you do?",
      choices: [
        "If I had a good impression, I would accept it.",
        "I would refuse it and never talk to that person again",
        "I would go home but I could accept it after more dates",
        "I would suggest another activity"
      ],
    },
    {
      question:
        "What is your favorite movie genre?",
      choices: [
        "Fantasy",
        "Adventure",
        "Romance",
        "Drama",
        "Science fiction",
        "Horror",
        "Thriller",
        "Mystery"
            ],
    },
    {
      question:
        "Which of the following qualities better fits you?",
      choices: [
        "Honest",
        "Loyal",
        "Kind",
        "Positive",
        "Ambitious",
        "Clever",
        "Polite",
        "Respectful",

            ],
    },
  ];

var currentQuestionIndex = 0;

function askQuestions(){
    // Hide main container
    var startScreenEl = document.querySelector("#form");
    startScreenEl.setAttribute("class", "hide");
    var infoParagraph = document.querySelector(".info-p")
    infoParagraph.setAttribute("class", "hide")
    proceed.setAttribute("class", "hide")

    //Unhide questions
    questionsCont.removeAttribute("class");
    getQuestion();
}

function getQuestion (){
    var currentQuestion = listQuestions[currentQuestionIndex]; 
    //Update question title with the current question
    var titleEl = document.querySelector(".question-title");
    titleEl.textContent = currentQuestion.question; 
    titleEl.style.color = "black";
    //Remove any past question
    choicesEl.innerHTML ="";
    // Transforming the choices into buttons, and ordering them using loop
    currentQuestion.choices.forEach(function(choice, i){
        //create new button for each choice
        var choiceNode = document.createElement("button");
        choiceNode.style.color ="white";
        choiceNode.setAttribute("class", "choice"); 
        choiceNode.setAttribute("value", choice); 
        choiceNode.textContent = i + 1 + ". " + choice; 
        choiceNode.onclick = questionOnClick; 
        //display on the page
        choicesEl.appendChild(choiceNode);
    });
}


function questionOnClick() {
    currentQuestionIndex++; // i = i + 1

    if (currentQuestionIndex === listQuestions.length){
        profileEnds();
    } else {
        getQuestion();
    }
}


function profileEnds(){
    questionsCont.setAttribute("class", "hide");
    var title2 = document.querySelector(".h2")
    title2.textContent = "Your profile has been created!"
    var linkPage = document.querySelector(".link-page");
    linkPage.removeAttribute("class", "hide");
}

proceed.onclick = askQuestions;





