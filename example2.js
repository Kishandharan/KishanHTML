let p = 0;
let t = 3;
let r = 8;

function calc1(p,t,r){
  let i = p*t*r/100;
  let a = p+i;
  let emi = a/(t*12);
  return [i,a];
}

document.getElementById("btn1").onclick = function handle1(){
  p = parseInt(document.getElementById("p1").value);
  let result1 = calc1(p,t,r);
  document.getElementById("interest1").textContent = parseInt(result1[0]);
  document.getElementById("emi1").textContent = parseFloat(result1[1]);
};


