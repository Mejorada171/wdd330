console.log("first: Fetching data...");

const url = "https://pokeapi.co/api/v2/pokemon"; // API URL without a specific Pokémon
let result = null;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("third: Data received", data);
        console.log("Total count of Pokémon:", data.count);
        console.log("Number of Pokémon returned by default:", data.results.length);
        result = data;
    })
    .catch(error => console.error("Error fetching data:", error));

console.log("second: ", result); // This will log "second: null" because fetch is asynchronous
