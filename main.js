const pokeFetch = () => {
  const pokemonSearch = document.getElementById("pokeBUSQUEDA");
  let pokemon = pokemonSearch.value.toLowerCase();

  const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  fetch(apiURL)
    .then((response) => {
      console.log("response", response);
      if (response.status != 200) {
        console.log(`pokemon no encontrado: ${pokemon} `);
        pokemonImage("./img/meme-pikachu-3.png");
        return;
      } else {
        console.log(`${pokemon}`);
        return response.json();
      }
    })
    .then((data) => {
      console.log("data: ", data);
      pokemonFound = data.sprites.front_default;
      pokemonImage(pokemonFound);
    })
    .catch((err) => {
      return console.log(err.message);
    });
};

const pokemonImage = (urlPokemon) => {
  const pokeIMG = document.getElementById("pokeIMG");
  pokeIMG.src = urlPokemon;
};

//  verificar pokemon no encontrado en pantalla secundaria
//  Fuente pixeleada
