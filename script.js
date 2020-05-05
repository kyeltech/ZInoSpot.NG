(function(){
function buildQuiz(questions, quizContainer){
// variable to store the HTML output
const output = [];
// const answers;
// for each question...
myQuestions.forEach(
    (currentQuestion, questionNumber) => {

// variable to store the list of possible answers
const answers = [];

// and for each available answer...
for(letter in questions.answers){

// ...add an HTML radio button
answers.push(
`<label>
<input type="radio" name="question${questionNumber}" value="${letter}">
${letter} :
${currentQuestion.answers[letter]}
</label>`
);
}

// add this question and its answers to the output
output.push(
`
<div class="slide">
<div class="question"> ${currentQuestion.question} </div>
<div class="answers"> ${answers.join("")} </div>
</div>`
);
}
);

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');

}

function showResults(myQuestions,quizContainer,){

// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach( (currentQuestion, questionNumber) => {

// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector('div') || {}).value;

// if answer is correct
if(userAnswer === currentQuestion.correctAnswer){
// add to the number of correct answers
numCorrect++;

// color the answers green
answerContainers[questionNumber].style.color = 'lightgreen';
}
// if answer is wrong or blank
else{
// color the answers red
answerContainers[questionNumber].style.color = 'red';
}
});

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
slides[currentSlide].classList.remove('active-slide');
slides[n].classList.add('active-slide');
currentSlide = n;
if(currentSlide === 0) {
previousButton.style.display = 'none';
}
else{
previousButton.style.display = 'inline-block';
}
if(currentSlide === slides.length-1){
nextBuuton.style.display = 'none';
submitButton.style.display = 'inline-block'
} 
else{
nextBuuton.style.display = 'inline-block';
submitButton.style.display = 'none';
}

showSlide(currentSlide);
// button for nextSlide
function showNextSlide(){
showSlide(currentSlide + 1);
}

function showPreviousSlide(){
showSlide(currentSlide - 1);
}

}
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
{
questions: 'who is your javascript teacher for the HNG program?',
answers:{
a:'xyluz',
b:'Jeff',
c:'Mark Essien'
},
correctAnswer: 'b'
},

{
questions: 'Who puts people on probation channel with a masquered emoji?',
answers:{
a:'Esther',
b:'skyler',
c:'kingabesh'
},
correctAnswer: 'c'
},
{
questions: 'who is the Lord calculus?',
answers:{
a:'khris',
b:'sophisticateddev',
c:'idmcalculus'
},
correctAnswer: 'c'
}, 
]

// Kick things off
buildQuiz();

// pagination
const previousButton = document.getElementById("previous")
const nextBuuton = document.getElementById("next")
const slides = document.getElementById(".slide")


let currentSlide = 0;


// Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
})();
generateQuiz(myQuestions, quizContainer. resultsContainer, submitButton);
