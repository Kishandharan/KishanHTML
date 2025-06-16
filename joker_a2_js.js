generateJoke("joke");

async function generateJoke(id){
    let api = fetch(
        "https://icanhazdadjoke.com/",
        {
            headers:{
                Accept: "application/json"
            }
        }
    );

    let joke1 = await api;
    let joke2 = await joke1.json();
    let joke3 = joke2.joke;
    document.getElementById(id).textContent = joke3;
}

/*
 
line number 12:
{
   ....
   joke: ""
}

*/
