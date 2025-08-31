let container = document.getElementById("container");
let css1 = "position: relative; height: 50px;";


container.innerHTML += `<div id="div6" style="${css1} left: 200px; background-color: rgb(255, 0, 0); width: 100px; opacity: 0;"></div>`;
container.innerHTML += `<div id="div5" style="${css1} left: 170px; background-color: rgb(255, 153, 0); width: 150px; opacity: 0;"></div>`;
container.innerHTML += `<div id="div4" style="${css1} left: 150px; background-color: yellow; width: 200px; opacity: 0;"></div>`;
container.innerHTML += `<div id="div3" style="${css1} left: 130px; background-color: rgb(0, 255, 68); width: 250px; opacity: 0;"></div>`;
container.innerHTML += `<div id="div2" style="${css1} left: 120px; background-color: rgb(31, 86, 249); width: 300px; opacity: 0;"></div>`;
container.innerHTML += `<div id="div1" style="${css1} left: 100px; background-color: rgb(200, 194, 204); width: 350px;opacity: 0;"></div>`;
container.innerHTML += `<div id="base" style="${css1} left: 80px; background-color: rgb(153, 7, 250); width: 400px;"></div>`;


let lastId = 1;
document.getElementById("base").onclick = function(){
    if(lastId != 7){
        document.getElementById(`div${lastId}`).style.opacity = "1";
        lastId++;
    }
}

