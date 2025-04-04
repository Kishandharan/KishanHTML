generateJoke()

async function generateJoke() {
	var joke1 = await fetch("https://icanhazdadjoke.com/", {
		 headers: {
            Accept: "application/json", // Request JSON response
         },
	});
	var joke2 = await joke1.json();
	console.log(joke2.joke)
}