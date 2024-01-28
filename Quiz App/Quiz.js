const question=[
    {
        question:"Which one is largest animal in the world",
        answers:[
            {text:"shark",correct:false},
            {text:"blue Wale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Girafee",correct:false}
        ]
    },
    {
        question:"Who is the richest man in the world!",
        answers:[
            {text:'Bill Gates',correct:false},
            {text:'jeff bezoz',correct:false},
            {text:'Elon Musk',correct:true},
            {text:'jhone shafley',correct:false},
        ]
    },
    {
        question:"Which one is the largest continent in the world",
        answers:[
            {text:'Africa',correct:false},
            {text:'Antartica',correct:false},
            {text:'Australia',correct:true},
            {text:'USA',correct:false},
        ]
    },
    {
        question:"What is the capital of France?",
        answers:[
            {text:'Paris',correct:true},
            {text:'London',correct:false},
            {text:'Berlin',correct:false},
            {text:'Madrid',correct:false},
        ]
    },
    {
        question:  "Who wrote 'Romeo and Juliet'?",
        answers:[
            {text:'William Shakespeare',correct:true},
            {text:'Charles Dickens',correct:false},
            {text:'Jane Austen',correct:false},
            {text:'Mark Twain',correct:false},
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers:[
            {text:'Venus',correct:false},
            {text:'Mars',correct:true},
            {text:'Jupiter',correct:false},
            {text:'Saturn',correct:false},
        ]
    },
   
    {
        question: "Who is the founder of Microsoft?",
        answers:[
            {text:'Bill Gates',correct:true},
            {text:'Steve Jobs',correct:false},
            {text:'Elon Musk',correct:false},
            {text:'Mark Zuckerberg',correct:false},
        ]
    },
  

];
const questionElement = document.getElementById('question');
const answerButtons = document.querySelector('.answer-buttons');
const nextButton = document.querySelector('.next');
const btns = document.querySelectorAll('.btn');

let currentQuestionIndex = 0;
score=0;
function StartQuize(){
    resetState();
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion() {
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Clear existing answer buttons and classes
    answerButtons.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectAnswer);
    });
}


function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    nextButton.style.display = "none";
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${question.length}`;
    nextButton.innerHTML='Play Again'
    nextButton.style.display="block"
}
function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showQuestion()
    }else{
        showScore();
    }
}
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<question.length){
        handleNextbutton();
    }
    else{
        StartQuize();
    }
})
StartQuize();