
const questions = [

{
question: "What does HTML stand for?",
answers: [
{ text: "Hyper Text Preprocessor", correct: false },
{ text: "Hyper Text Markup Language", correct: true },
{ text: "Hyper Text Multiple Language", correct: false },
{ text: "Hyper Tool Multi Language", correct: false }
]
},

{
question: "Which language is used for styling web pages?",
answers: [
{ text: "HTML", correct: false },
{ text: "JQuery", correct: false },
{ text: "CSS", correct: true },
{ text: "XML", correct: false }
]
},

{
question: "Which language runs in browser?",
answers: [
{ text: "Java", correct: false },
{ text: "C", correct: false },
{ text: "Python", correct: false },
{ text: "JavaScript", correct: true }
]
},

{
question: "What does CSS stand for?",
answers: [
{ text: "Creative Style Sheets", correct: false },
{ text: "Cascading Style Sheets", correct: true },
{ text: "Computer Style Sheets", correct: false },
{ text: "Colorful Style Sheets", correct: false }
]
},

{
question: "Which tag is used for largest heading?",
answers: [
{ text: "<h6>", correct: false },
{ text: "<h1>", correct: true },
{ text: "<heading>", correct: false },
{ text: "<head>", correct: false }
]
},

{
question: "Which HTML attribute is used for inline styles?",
answers: [
{ text: "class", correct: false },
{ text: "style", correct: true },
{ text: "font", correct: false },
{ text: "styles", correct: false }
]
},

{
question: "Which is correct HTML element for inserting a line break?",
answers: [
{ text: "<br>", correct: true },
{ text: "<break>", correct: false },
{ text: "<lb>", correct: false },
{ text: "<newline>", correct: false }
]
},

{
question: "What is the correct HTML for adding a background color?",
answers: [
{ text: "<body bg='yellow'>", correct: false },
{ text: "<body style='background-color:yellow;'>", correct: true },
{ text: "<background>yellow</background>", correct: false },
{ text: "<bg>yellow</bg>", correct: false }
]
},

{
question: "Choose the correct HTML element for bold text?",
answers: [
{ text: "<b>", correct: true },
{ text: "<bold>", correct: false },
{ text: "<strong>", correct: false },
{ text: "<big>", correct: false }
]
},

{
question: "How can you open a link in a new tab?",
answers: [
{ text: "<a href='url' target='new'>", correct: false },
{ text: "<a href='url' target='_blank'>", correct: true },
{ text: "<a href='url' new>", correct: false },
{ text: "<a href='url' target='window'>", correct: false }
]
},

{
question: "Which of these elements are all <table> elements?",
answers: [
{ text: "<table><tr><td>", correct: true },
{ text: "<table><head><tfoot>", correct: false },
{ text: "<table><tr><tt>", correct: false },
{ text: "<thead><body><tr>", correct: false }
]
},

{
question: "Inline elements are normally displayed without starting a new line?",
answers: [
{ text: "True", correct: true },
{ text: "False", correct: false },
{ text: "Maybe", correct: false },
{ text: "Depends", correct: false }
]
},

{
question: "How can you make a numbered list?",
answers: [
{ text: "<dl>", correct: false },
{ text: "<ol>", correct: true },
{ text: "<list>", correct: false },
{ text: "<ul>", correct: false }
]
},

{
question: "How can you make a bulleted list?",
answers: [
{ text: "<dl>", correct: false },
{ text: "<ol>", correct: false },
{ text: "<list>", correct: false },
{ text: "<ul>", correct: true }
]
},

{
question: "What is the correct HTML for creating a checkbox?",
answers: [
{ text: "<input type='check'>", correct: false },
{ text: "<check>", correct: false },
{ text: "<checkbox>", correct: false },
{ text: "<input type='checkbox'>", correct: true }
]
},

{
question: "What is the correct HTML for creating a text input field?",
answers: [
{ text: "<input type='text'>", correct: true },
{ text: "<textfield>", correct: false },
{ text: "<textinput>", correct: false },
{ text: "<input type='textfield'>", correct: false }
]
},

{
question: "What is the correct HTML for creating a button?",
answers: [
{ text: "<button>Click me</button>", correct: true },
{ text: "<btn>Click me</btn>", correct: false },
{ text: "<input type='button'>Click me</input>", correct: false },
{ text: "<input type='btn'>", correct: false }
]
},

{
question: "Which HTML attribute specifies an alternate text for an image?",
answers: [
{ text: "title", correct: false },
{ text: "alt", correct: true },
{ text: "src", correct: false },
{ text: "longdesc", correct: false }
]
},

{
question: "Which doctype is correct for HTML5?",
answers: [
{ text: "<!DOCTYPE HTML5>", correct: false },
{ text: "<!DOCTYPE html>", correct: true },
{ text: "<!DOCTYPE HTML PUBLIC>", correct: false },
{ text: "<!DOCTYPE html5>", correct: false }
]
},

{
question: "Which HTML element is used to specify a footer for a document?",
answers: [
{ text: "<bottom>", correct: false },
{ text: "<footer>", correct: true },
{ text: "<end>", correct: false },
{ text: "<foot>", correct: false }
]
},

{
question: "In HTML, which attribute is used to specify that an input field must be filled out?",
answers: [
{ text: "validate", correct: false },
{ text: "placeholder", correct: false },
{ text: "required", correct: true },
{ text: "formvalidate", correct: false }
]
},

{
question: "Which HTML element defines navigation links?",
answers: [
{ text: "<nav>", correct: true },
{ text: "<navigate>", correct: false },
{ text: "<navigation>", correct: false },
{ text: "<navlinks>", correct: false }
]
},

{
question: "Which HTML element defines the title of a document?",
answers: [
{ text: "<meta>", correct: false },
{ text: "<title>", correct: true },
{ text: "<head>", correct: false },
{ text: "<header>", correct: false }
]
},

{
question: "What is the correct HTML for inserting an image?",
answers: [
{ text: "<img href='image.gif' alt='MyImage'>", correct: false },
{ text: "<img src='image.gif' alt='MyImage'>", correct: true },
{ text: "<image src='image.gif' alt='MyImage'>", correct: false },
{ text: "<img alt='MyImage'>image.gif</img>", correct: false }
]
},

{
question: "Which HTML element is the container for all other HTML elements?",
answers: [
{ text: "<body>", correct: false },
{ text: "<head>", correct: false },
{ text: "<html>", correct: true },
{ text: "<main>", correct: false }
]
},

{
question: "What is the correct HTML for creating a hyperlink?",
answers: [
{ text: "<a name='http://www.w3.org'>W3C</a>", correct: false },
{ text: "<a href='http://www.w3.org'>W3C</a>", correct: true },
{ text: "<a url='http://www.w3.org'>W3C</a>", correct: false },
{ text: "<a link='http://www.w3.org'>W3C</a>", correct: false }
]
},

{
question: "Which symbol is used for comments in HTML?",
answers: [
{ text: "//", correct: false },
{ text: "<!-- -->", correct: true },
{ text: "#", correct: false },
{ text: "**", correct: false }
]
},

{
question: "Which HTML attribute is used to define inline styles?",
answers: [
{ text: "class", correct: false },
{ text: "font", correct: false },
{ text: "styles", correct: false },
{ text: "style", correct: true }
]
},

{
question: "Which is the correct HTML element for playing video files?",
answers: [
{ text: "<media>", correct: false },
{ text: "<video>", correct: true },
{ text: "<movie>", correct: false },
{ text: "<play>", correct: false }
]
},

{
question: "Which is the correct HTML element for playing audio files?",
answers: [
{ text: "<sound>", correct: false },
{ text: "<audio>", correct: true },
{ text: "<music>", correct: false },
{ text: "<mp3>", correct: false }
]
},

{
question: "The <title> element must be located inside?",
answers: [
{ text: "the <body> element", correct: false },
{ text: "the <head> element", correct: true },
{ text: "the <header> element", correct: false },
{ text: "the <main> element", correct: false }
]
},

{
question: "What is the correct HTML for creating a drop-down list?",
answers: [
{ text: "<list>", correct: false },
{ text: "<select>", correct: true },
{ text: "<dropdown>", correct: false },
{ text: "<input type='dropdown'>", correct: false }
]
},

{
question: "Which HTML attribute specifies the URL of the page the link goes to?",
answers: [
{ text: "name", correct: false },
{ text: "link", correct: false },
{ text: "href", correct: true },
{ text: "url", correct: false }
]
},

{
question: "What does HTTP stand for?",
answers: [
{ text: "Hyper Text Transfer Protocol", correct: true },
{ text: "Hyper Text Transmission Process", correct: false },
{ text: "Hyper Transfer Text Protocol", correct: false },
{ text: "Hyper Text Transfer Program", correct: false }
]
},

{
question: "What does HTTPS stand for?",
answers: [
{ text: "Hyper Text Transfer Protocol Secure", correct: true },
{ text: "Hyper Text Transmission Protocol Secure", correct: false },
{ text: "Hyper Transfer Text Protocol Secure", correct: false },
{ text: "Hyper Text Transfer Program Secure", correct: false }
]
},

{
question: "What does FTP stand for?",
answers: [
{ text: "File Transfer Protocol", correct: true },
{ text: "Fast Transfer Protocol", correct: false },
{ text: "File Transmission Protocol", correct: false },
{ text: "File Transfer Program", correct: false }
]
},

{
question: "What does URL stand for?",
answers: [
{ text: "Uniform Resource Locator", correct: true },
{ text: "Universal Resource Locator", correct: false },
{ text: "Unique Resource Link", correct: false },
{ text: "Uniform Resource Link", correct: false }
]
},

{
question: "What does API stand for?",
answers: [
{ text: "Application Programming Interface", correct: true },
{ text: "Application Program Interface", correct: false },
{ text: "Applied Programming Interface", correct: false },
{ text: "Application Protocol Interface", correct: false }
]
},

{
question: "What does SQL stand for?",
answers: [
{ text: "Structured Query Language", correct: true },
{ text: "Simple Query Language", correct: false },
{ text: "Standard Question Language", correct: false },
{ text: "Structured Question Language", correct: false }
]
},

{
question: "What does XML stand for?",
answers: [
{ text: "eXtra Markup Language", correct: false },
{ text: "eXecutable Multiple Language", correct: false },
{ text: "eXtensible Markup Language", correct: true },
{ text: "eXample Markup Language", correct: false }
]
},

{
question: "What does JSON stand for?",
answers: [
{ text: "JavaScript Object Notation", correct: true },
{ text: "Java Source Object Notation", correct: false },
{ text: "Java Simple Object Notation", correct: false },
{ text: "Java Structured Object Notation", correct: false }
]
},

{
question: "Which language is known as the language of the web?",
answers: [
{ text: "Python", correct: false },
{ text: "JavaScript", correct: true },
{ text: "C++", correct: false },
{ text: "Java", correct: false }
]
},

{
question: "What is ReactJS?",
answers: [
{ text: "A database", correct: false },
{ text: "A JavaScript library", correct: true },
{ text: "A programming language", correct: false },
{ text: "An operating system", correct: false }
]
},

{
question: "What is Node.js?",
answers: [
{ text: "A JavaScript framework", correct: false },
{ text: "A JavaScript runtime", correct: true },
{ text: "A database", correct: false },
{ text: "A programming language", correct: false }
]
},

{
question: "What is Python primarily used for?",
answers: [
{ text: "Web development only", correct: false },
{ text: "Data science and web development", correct: true },
{ text: "Game development only", correct: false },
{ text: "Mobile development only", correct: false }
]
},

{
question: "What is Git?",
answers: [
{ text: "A programming language", correct: false },
{ text: "A version control system", correct: true },
{ text: "A database", correct: false },
{ text: "A web browser", correct: false }
]
},

{
question: "What is Docker?",
answers: [
{ text: "A programming language", correct: false },
{ text: "A version control system", correct: false },
{ text: "A containerization platform", correct: true },
{ text: "A web server", correct: false }
]
},

{
question: "What is AWS?",
answers: [
{ text: "Amazon Web Services", correct: true },
{ text: "Advanced Web System", correct: false },
{ text: "Application Web Server", correct: false },
{ text: "American Web Services", correct: false }
]
},

{
question: "What is AI?",
answers: [
{ text: "Artificial Intelligence", correct: true },
{ text: "Automated Interface", correct: false },
{ text: "Application Integration", correct: false },
{ text: "Advanced Internet", correct: false }
]
},

{
question: "What is Machine Learning?",
answers: [
{ text: "A type of hardware", correct: false },
{ text: "A subset of AI that learns from data", correct: true },
{ text: "A programming language", correct: false },
{ text: "A database system", correct: false }
]
},

{
question: "What is Bootstrap?",
answers: [
{ text: "A JavaScript framework", correct: false },
{ text: "A CSS framework", correct: true },
{ text: "A programming language", correct: false },
{ text: "A database", correct: false }
]
},

{
question: "What is jQuery?",
answers: [
{ text: "A JavaScript library", correct: true },
{ text: "A CSS framework", correct: false },
{ text: "A programming language", correct: false },
{ text: "A database", correct: false }
]
}

];

let index = 0;
let score = 0;
let time = 10;
let timerInterval = null;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const timer = document.getElementById("time");
const scoreBox = document.getElementById("scoreBox");
const restartBtn = document.getElementById("restartBtn");

function startTimer(){

time = 10;
timer.innerText = time;

if(timerInterval){
clearInterval(timerInterval);
}

timerInterval = setInterval(()=>{

time--;
timer.innerText = time;

if(time <= 0){
clearInterval(timerInterval);
nextQuestion();
}

},1000);

}

function showQuestion(){

answersEl.innerHTML = "";
nextBtn.style.display = "none";

let q = questions[index];

questionEl.innerText = q.question;

q.answers.forEach((answer, i)=>{

const btn = document.createElement("button");
btn.innerText = answer.text;
btn.dataset.correct = answer.correct;

btn.onclick = ()=>{

// Stop timer immediately
clearInterval(timerInterval);

// Disable all buttons after selection
const allBtns = answersEl.querySelectorAll("button");
allBtns.forEach(b => b.disabled = true);

if(answer.correct){
btn.classList.add("correct");
score++;
}else{
btn.classList.add("wrong");
// Show correct answer
allBtns.forEach(b => {
if(b.dataset.correct === "true"){
b.classList.add("correct");
}
});
}

// Show next button
nextBtn.style.display = "block";

};

answersEl.appendChild(btn);

});

startTimer();

}

function nextQuestion(){

index++;

if(index < questions.length){

showQuestion();

}else{

questionEl.innerText = "Quiz Finished!";
answersEl.innerHTML = "";
nextBtn.style.display = "none";
restartBtn.style.display = "block";

scoreBox.innerText = "Your Score: " + score + " / " + questions.length;

}

}

function restartQuiz(){
index = 0;
score = 0;
scoreBox.innerText = "";
restartBtn.style.display = "none";
showQuestion();
}

nextBtn.onclick = nextQuestion;
restartBtn.onclick = restartQuiz;

showQuestion();


