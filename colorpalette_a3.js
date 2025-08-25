let redShades = [
    "rgb(255, 0, 0)",
    "rgb(183, 0, 0)",
    "rgb(124, 0, 0)",
    "rgb(79, 0, 0)",
    "rgb(30, 0, 0)",
    "rgb(3, 0, 0)",
    "rgb(0, 0, 0)"
]; 

let greenShades = [
    "rgb(0, 255, 0)",
    "rgb(0, 183, 0)",
    "rgb(0, 124, 0)",
    "rgb(0, 79, 0)",
    "rgb(0, 30, 0)",
    "rgb(0, 3, 0)",
    "rgb(0, 0, 0)"
]; 

let blueShades = [
    "rgb(0, 0, 255)",
    "rgb(0, 0, 183)",
    "rgb(0, 0, 124)",
    "rgb(0, 0, 79)",
    "rgb(0, 0, 30)",
    "rgb(0, 0, 3)",
    "rgb(0, 0, 0)"
]; 

let colorPalette = document.getElementById("table1"); 
let innerCode = ``;

innerCode += "<tr>"
for(let i = 0; i<7; i++){
    innerCode += `<td style="background-color: ${redShades[i]}; width: 100px; height: 50px">`;
}
innerCode += "</tr>";

innerCode += "<tr>"
for(let i = 0; i<7; i++){
    innerCode += `<td style="background-color: ${greenShades[i]}; width: 100px; height: 50px">`;
}
innerCode += "</tr>";

innerCode += "<tr>"
for(let i = 0; i<7; i++){
    innerCode += `<td style="background-color: ${blueShades[i]}; width: 100px; height: 50px">`;
}
innerCode += "</tr>";

colorPalette.innerHTML = innerCode;
