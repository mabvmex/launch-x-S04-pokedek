const pokemonSearch = document.getElementById("pokeBusqueda");

const pokeFetch = () => {
  let pokemon = pokemonSearch.value.toLowerCase();
  const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  fetch(apiURL)
    .then((response) => {
      if (response.status != 200) {
        let notFound = document.getElementsByClassName("notFound");
        for (let i = 1; i < notFound.length; i++) {
          notFound[i].value = " ";
        }
        notFound[0].value = "= pokemon not found =";
        pokemonImage("./img/meme.png");
        return;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      pokemonFoundImage = data.sprites.front_default;
      pokemonFoundName = data.name;
      pokemonFoundType = data.types[0].type.name;
      pokemonFoundStats = data.stats;
      pokemonFoundMoves = data.moves;

      pokemonImage(pokemonFoundImage);
      pokemonName(pokemonFoundName);
      pokemonType(pokemonFoundType);
      pokemonStats(pokemonFoundStats);
      pokemonMoves(pokemonFoundMoves);
    })
    .catch((err) => {
      err.message;
    });
};

// FUNCIONES //

const pokemonImage = (pokemonURL) => {
  const pokeIMG = document.getElementById("pokePantallaPrincipal");
  pokeIMG.src = pokemonURL;
};

const pokemonName = (pokeNombre) => {
  const pokeDataName = document.getElementById("poke-pantalla-secundaria-1");
  pokeDataName.value = `  Nombre: ${pokeNombre}`;
};

const pokemonType = (pokemonTipo) => {
  const pokeType = document.getElementById("poke-pantalla-secundaria-2");
  pokeType.value = `  Tipo: ${pokemonTipo}`;
};

const pokemonStats = (pokemonEstadisticas) => {
  let dato1, dato2, i;

  for (i = 0; i < pokemonEstadisticas.length; i++) {
    dato1 = pokemonEstadisticas[i].base_stat;
    dato2 = pokemonEstadisticas[i].stat.name;

    const pokeStats = document.getElementById(
      `poke-pantalla-secundaria-${i + 4}`
    );
    pokeStats.value = `${dato2}: ${dato1}`;
  }
};

const pokemonMoves = (pokemonMovimientos) => {
  let dato3, j;

  for (j = 0; j <= 10; j++) {
    dato3 = pokemonMovimientos[j].move.name;
    const pokeMoves = document.getElementById(
      `poke-pantalla-secundaria-${j + 11}`
    );
    pokeMoves.value = `${dato3}`;
  }
};
