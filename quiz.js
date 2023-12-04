//Question bank
const storageData = JSON.parse(localStorage.getItem("data"));
let questionBank= storageData;
const finalySum = 1000000;
let addSum = 0;
const fixSum = Math.round(finalySum / questionBank.length);
/*
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option : ['Asia','Africa','Europe','Australia'],
        answer : 'Africa'
    }
*/

let question= document.getElementById('question');
let quizContainer= document.getElementById('quiz-container');
let scorecard= document.getElementById('scorecard');
let option0= document.getElementById('option0');
let option1= document.getElementById('option1');
let option2= document.getElementById('option2');
let option3= document.getElementById('option3');
let option4= document.getElementById('option4');
let next= document.querySelector('.next');
let points= document.getElementById('score');
let span= document.querySelectorAll('span');
let i=0;
let score= 0;
let lose = false;

//function to display questions
function displayQuestion(){
    option0.innerHTML = "";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    for(let a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= '№'+(i+1)+' '+questionBank[i].question;
    if (questionBank[i].option[0] != undefined) {
        option0.innerHTML= questionBank[i].option[0];
        const one = document.querySelector(".one");
        one.style.cssText += `
            opacity: 1;
        `;
    } else {
        const one = document.querySelector(".one");
        one.style.cssText += `
            opacity: 0;
        `;
    }
    if (questionBank[i].option[1] != undefined) {
        option1.innerHTML= questionBank[i].option[1];
        const two = document.querySelector(".two");
        two.style.cssText += `
            opacity: 1;
        `;
    } else {
        const two = document.querySelector(".two");
        two.style.cssText += `
            opacity: 0;
        `;
    }
    if (questionBank[i].option[2] != undefined) {
        option2.innerHTML= questionBank[i].option[2];
        const three = document.querySelector(".three");
        three.style.cssText += `
            opacity: 1;
        `;
    } else {
        const three = document.querySelector(".three");
        three.style.cssText += `
            opacity: 0;
        `;
    }
    if (questionBank[i].option[3] != undefined) {
        option3.innerHTML= questionBank[i].option[3];
        const four = document.querySelector(".four");
        four.style.cssText += `
            opacity: 1;
        `;
    } else {
        const four = document.querySelector(".four");
        four.style.cssText += `
            opacity: 0;
        `;
    }
    if (questionBank[i].option[4] != undefined) {
        option4.innerHTML= questionBank[i].option[4];
        const five = document.querySelector(".five");
        five.style.cssText += `
            opacity: 1;
        `;
    } else {
        const five = document.querySelector(".five");
        five.style.cssText += `
            opacity: 0;
        `;
    }
    stat.innerHTML= "Запитання"+' '+(i+1)+' '+'з'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length && e.innerHTML != "") {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
        addSum += fixSum;
        console.log(addSum);
        setTimeout(nextQuestion,1000);
    } else if (e.innerHTML == "") {
        console.log("ok");
    } else{
        document.getElementById(e.id).style.background= 'tomato';
        lose = true;
        setTimeout(nextQuestion,1000);
    }
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1 && lose != true)
    {
        i=i+1;
        displayQuestion();
    } else if (lose == true) {
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
        document.querySelector("#score-title").innerHTML = `Ви дiйшли до ${addSum}$.. <br /><br />Правильних відповідей`;
    } else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    let answerBank= document.getElementById('answerBank');
    let answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(let a=0;a<questionBank.length;a++)
    {
        let list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();