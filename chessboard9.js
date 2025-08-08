let chessboard = document.getElementById("chessboard");
let opening_white = [
    "&#9814", 
    "&#9816", 
    "&#9815",
    "&#9813",
    "&#9812",
    "&#9815",
    "&#9816", 
    "&#9814",
    "&#9817",
    "&#9817",
    "&#9817",
    "&#9817",
    "&#9817",
    "&#9817", 
    "&#9817",
    "&#9817"
];
let id1 = "";

id1 = "row1";
chessboard.innerHTML += `<tr id="${id1}"></tr>`;
for(let i=0; i<8; i++){
    document.getElementById(id1).innerHTML += `<td>${opening_white[i]}</td>`;
}


id1 = "row2";
chessboard.innerHTML += `<tr id="row2">`;
for(let i=8; i<16; i++){
    document.getElementById(id1).innerHTML += `<td>${opening_white[i]}</td>`;
}
