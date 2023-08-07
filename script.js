const quizData=[
    {
        question:"which language runs in web browser?",
        a:"java",
        b:"C",
        c:"python",
        d:"javascript",
        correct:"d",
    },
    {
        question:"what does CSS stands for?",
        a:"central style sheets",
        b:"cascading style sheets",
        c:"cascading simple sheets",
        d:"car's SUV's sailboats",
        correct:"b",
    },
    {
        question:"what does HTML stands for?",
        a:"Hyper Text Markup Language",
        b:"Hyper Text Markdown Language",
        c:"Hyper Loop Machine Language",
        d:"Hyper train Master Ladder",
        correct:"a",
    },
    {
        question:"In which year Javascript was launched?",
        a:"1994",
        b:"1995",
        c:"1996",
        d:"None of th above",
        correct:"b",
    }
];

// getting quiz container

let quiz=document.getElementById('quiz')

// heading

let heading=document.getElementById('heading')

// optionlist(radio button) by using queryselectorall

let optionList=document.querySelectorAll('.optionList')
console.log(optionList)

// each option (label)

const aOption=document.getElementById('aOption')
const bOption=document.getElementById('bOption')
const cOption=document.getElementById('cOption')
const dOption=document.getElementById('dOption')

// submitt button

const submitbtn=document.getElementById('submit')

let currentQuizCount=0
let score=0

// function to load the question 

loadQuiz()
function loadQuiz(){
    let currentQuizData=quizData[currentQuizCount]
    console.log(currentQuizData)
    heading.innerText=currentQuizData.question
    aOption.innerText=currentQuizData.a
    bOption.innerText=currentQuizData.b
    cOption.innerText=currentQuizData.c
    dOption.innerText=currentQuizData.d
}


function deSelect()
{
    optionList.forEach((element)=>element.checked=false)
}

function getSelected()
{
    let selectedAnswer
    optionList.forEach((element)=>{
        if(element.checked)
        {
            selectedAnswer=element.id
        }
    })
    return selectedAnswer
}

submitbtn.addEventListener('click',()=>{
    let answer=getSelected() //here answer was declared
    loadQuiz()
    deSelect()
    console.log(currentQuizCount)

    // check correct answer and make the score

    if(answer)
    {
        console.log(true)

        if(answer===quizData[currentQuizCount].correct)
        {
            console.log('true')
            score++;
            console.log("score"+score)
        }
        currentQuizCount++;
    }
    if(currentQuizCount<quizData.length)
    {
        loadQuiz()
    }
        else{
            quiz.innerHTML=(`<h2> You Scored:${score}/${quizData.length}</h2>
            <button class="submitbtn" onClick=location.reload()>Reload</button`)

            document.body.style.backgroundImage="url('https://www.pngitem.com/middle/hwmbRRm_download-daisies-with-grasspicture-png-images-background-garden/')"
        }
    
})
