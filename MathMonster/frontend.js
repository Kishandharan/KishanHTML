// The main screen elements
const main = document.getElementById("main");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");

// The end screen elements
const end = document.getElementById("end");
const score = document.getElementById("score");
const history = document.getElementById("history");

// For now, we are using a temporary dataset instead of the Flask API 
const dataset = {
  cap: 3,
  questions: [
    {q: "What is 1+1", a:"2"},
    {q: "What is 1+2", a:"3"},
    {q: "What is 1+3", a:"4"},
  ]
};

let count = 0;
let points = 0;
let limit = dataset["cap"];

question.textContent = dataset["questions"][count]["q"];

submit.onclick = function handleClick(){
  if(count+1 < limit){
    question.textContent = dataset["questions"][count]["q"];
    if(answer.value === dataset["questions"][count]["a"]){
      points+=10;
      history.innerHTML += `<p>Q${count+1} - 10</p>`;
    }else{
      points+=0;
      history.innerHTML += `<p>Q${count+1} - 0</p>`;
    }
    count++;
  }else{
    main.style.display = "none";
    score.textContent = points.toString();
  }
}
