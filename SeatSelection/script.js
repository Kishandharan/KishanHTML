function render(){
    let rows = Number(document.getElementById("rows").value);
    let cols = Number(document.getElementById("cols").value);
    let table = document.getElementById("table");
    for(let i = 1; i<=rows; i++){
        table.innerHTML += `<tr id='row${i}'></tr>`;
       
        for(let j = 1; j<=cols; j++){

            document.getElementById(`row${i}`).innerHTML += "<td><input type='checkbox'></td>";

        }
       
    }
}
