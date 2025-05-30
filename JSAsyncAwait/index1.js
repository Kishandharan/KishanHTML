var p1 = new Promise((success, failure) =>{
	console.log("Hello!");
	console.log("Bello!");
	success("Success");
})

asyncfunc1();
asyncfunc2();

async function asyncfunc1(){
	var response = await p1;
	console.log(response);
	console.log("I think this line of code will never execute!");
}

async function asyncfunc2(){
	var response = await p1;
	console.log(response);
	console.log("I think this line of code will never execute!");
}
