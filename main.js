const pokemonSearch = document.getElementById("pokeBusqueda");

const pokeFetch = () => {
  let pokemon = pokemonSearch.value.toLowerCase();
  const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  fetch(apiURL)
    .then((response) => {
      if (response.status != 200) {
        console.log(`pokemon no encontrado: ${pokemon} `);
        pokemonImage("./img/meme.png");
        return;
      } else {
        return response.json();
      }
    })

    .then((data) => {
      console.log("pokeFetch data: ", data);
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
      return console.log(err.message);
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
  // console.log(pokemonEstadisticas);

  let dato1, dato2, i;
  for (i = 0; i <= pokemonEstadisticas.length; i++) {
    dato1 = pokemonEstadisticas[i].base_stat;
    dato2 = pokemonEstadisticas[i].stat.name;
    console.log(`${i}.- ${dato1} = ${dato2}`);
  }

  const pokeStats = document.getElementById("poke-pantalla-secundaria-3");
  pokeStats.value = `Stats: ${i}.- ${dato1} = ${dato2}`;
};


const pokemonMoves = (pokemonMoviemientos) => {
  console.log(pokemonMoviemientos);

  const pokeMoves = document.getElementById("poke-pantalla-secundaria-4");
  pokeMoves.value = ` Movimientos: ${pokemonMoviemientos}`;
};


//  verificar pokemon no encontrado en pantalla secundaria
