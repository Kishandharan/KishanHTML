let remtaskbtn = document.getElementById("remtaskbtn");
let addtaskbtn = document.getElementById("addtaskbtn");
let todos = document.getElementById("todos");

addtaskbtn.onclick = function(){
	let task = document.getElementById("task").value;
	todos.innerHTML += `
	<div class="data-card" id="${task}">
	    ${task}
	</div>
	`;
	document.getElementById("task").value = "";
}