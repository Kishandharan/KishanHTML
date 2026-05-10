const main = document.getElementById("main");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");
const end = document.getElementById("end");
const score = document.getElementById("score");
const history = document.getElementById("history");

// For now, we are using a temporary dataset instead of the Flask API 
const dataset = {
  cap: 4,
  questions: [
    {q: "What is 1+1", a:"2"},
    {q: "What is 1+2", a:"3"},
    {q: "What is 1+3", a:"4"},
    {q: "What is 1+4", a:"5"},
  ]
};

let count = 0;
let points = 0;
let limit = dataset["cap"];
question.textContent = dataset["questions"][0]["q"];

function handle() {
  if(count+1 < limit){
    if(answer.value === dataset["questions"][count]["a"]){
      points+=10;
      history.innerHTML += `<p>Q${count+1} - 10</p>`;
    }else{
      points+=0;
      history.innerHTML += `<p style="color: #FF0000;">Q${count+1} - 0</p>`;
      alert("Oops! Incorrect answer!");
    }
  }else{
      if(answer.value === dataset["questions"][count]["a"]){
        points+=10;
        history.innerHTML += `<p>Q${count+1} - 10</p>`;
      }else{
        points+=0;
        history.innerHTML += `<p style="color: #FF0000;">Q${count+1} - 0</p>`;
        alert("Oops! Incorrect answer!");
      }
      main.style.display = "none";
      end.style.opacity = "1";
      score.textContent = points.toString();
  }
  count++;
  question.textContent = dataset["questions"][count]["q"];
  answer.value = "";
}

submit.onclick = handle;
answer.addEventListener("keydown", function (event){
  if(event.key == "Enter"){
    handle();
  }
});
