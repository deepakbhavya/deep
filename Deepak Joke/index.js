const btnEl = document.getElementById("btn")
const jokeE1 = document.getElementById("joke")
const apiKey ="ss9UIfQKcVJyLGt2+mSD3g==5GbOx4JzwJaFD5Fl"
const options = {
    method: "GET",
    headers:{
        'X-Api-Key': apiKey,
    },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
 async function getJoke(){
    jokeE1.innerText = "Updating";
    const response =  await fetch(apiUrl, options);
    const data = await response.json();
    jokeE1.innerText = data[0].joke;
}


btnEl.addEventListener("click", getJoke)