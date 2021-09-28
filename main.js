const questionsArray = [
{
question : "2010 World Cup winner ?" ,
flags : [
"https://cdn.pixabay.com/photo/2013/07/13/14/17/spain-162428__480.png" ,
"https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017__340.png" ,
"https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png", 
"https://cdn.pixabay.com/photo/2014/04/02/11/12/brazil-305531__340.png " 
] ,
answer : "Spain"
} ,

{
question : "2002 World Cup winner ?" ,
flags : [
"https://cdn.pixabay.com/photo/2014/04/02/11/12/brazil-305531_960_720.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/16/portugal-162394__480.png", 
"https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326_960_720.png" ,
"https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017__340.png"
] ,
answer : "brazil"
} , 

{
question : "2006 World Cup Winner ?" ,
flags : [
"https://cdn.pixabay.com/photo/2013/07/13/14/14/argentina-162229__480.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326__480.png",
"https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png",
"https://cdn.pixabay.com/photo/2015/11/12/15/52/flag-1040530__340.png",
]
} ,

]

let opt1 = document.getElementById("option1");
let opt2 = document.getElementById("option2");
let opt3 = document.getElementById("option3");
let opt4 = document.getElementById("option4");
let currentQuestion = document.getElementById("question");
let scoreShow = document.getElementById("score");
let playerInput = document.getElementById("input");
let gameBtn = document.getElementById("gameBtn")


let current = 0 ;
let userScore = 0 ;
currentQuestion.innerText = questionsArray[current].question
scoreShow.innerText = `Score : ${userScore}`
opt1.src = questionsArray[current].flags[0];
opt2.src = questionsArray[current].flags[1];
opt3.src = questionsArray[current].flags[2];
opt4.src = questionsArray[current].flags[3];


gameBtn.addEventListener("click" , ()=>{
if (playerInput.value.toLowerCase() == questionsArray[current].answer.toLowerCase()){
userScore+=100 ;
scoreShow.innerText=`Score :${userScore}` ;
current++ ;
currentQuestion.innerText = questionsArray[current].question;
opt1.src = questionsArray[current].flags[0];
opt2.src = questionsArray[current].flags[1];
opt3.src = questionsArray[current].flags[2];
opt4.src = questionsArray[current].flags[3];
}
else {
userScore-=100 ;
scoreShow.innerText=`Score: ${userScore}` ;
current++ ;
currentQuestion.innerText = questionsArray[current].question ;
opt1.src = questionsArray[current].flags[0];
opt2.src = questionsArray[current].flags[1];
opt3.src = questionsArray[current].flags[2];
opt4.src = questionsArray[current].flags[3];
}
}) ;



