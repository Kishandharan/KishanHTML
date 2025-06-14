generateJoke();

async function generateJoke(){
    let api_prom = fetch("https://icanhazdadjoke.com/",{
            headers: {
                Accept: "application/json"        
            }
        }
    ); 

    let joke1 = await api_prom;
    let joke2 = await joke1.json();
    let result = joke2.joke;
    document.getElementById("joke").textContent = result;
}
