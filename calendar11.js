let t1 = document.getElementById("t1");

for(let j = 0; j<4; j++){
    t1.innerHTML += `<tr id="tr${j}">`;
    for(let i = 1+(7*j); i<=7*(j+1); i++){
        
        document.getElementById(`tr${j}`).innerHTML += `<td>${i}</td>`;
    }
    t1.innerHTML += "</tr>";
}

