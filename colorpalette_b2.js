let colorbox = document.getElementById("colorbox");
let submitBt = document.getElementById("submitBtn");
let r = document.getElementById("r");
let g = document.getElementById("g");
let b = document.getElementById("b");


submitBt.onclick = function() {
    let red = r.value;
    let grn = g.value;
    let blu = b.value;

    colorbox.style.backgroundColor = `rgb(${red}, ${grn}, ${blu})`;
}
