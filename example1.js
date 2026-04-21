let p = 1000;
let t = 3;
let r = 8;
let i = p*t*r/100;
let a = p+i;
let emi = a/(t*12);
document.getElementById("interest1").textContent = parseInt(i);
document.getElementById("emi1").innerHTML = parseFloat(emi.toFixed(2));


