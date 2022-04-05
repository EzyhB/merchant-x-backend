import fetch from "cross-fetch";

const createDataScript = async (pokemonid: string) => {
  const searchingForPokemon = pokemonid.toLocaleLowerCase();

  /* It's fetching the data from the pokemon API. */
  const pokemonData = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + searchingForPokemon
  );
  const jsonPokemonData = await pokemonData.json();

  const pokemonDescription = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species/" + searchingForPokemon
  );
  const jsonPokemonDescription = await pokemonDescription.json();

  let newStrWithoutJS =
    jsonPokemonDescription.flavor_text_entries[0].flavor_text.replace(
      /["\n" "\f"]/g,
      " "
    );

  const textToTranslate = {
    text: newStrWithoutJS,
  };

  //   const urlString = new URLSearchParams(textToTranslate);

  /* It's fetching the data from the Shakespeare API. */
  const shakesPTranslator = await fetch(
    "https://api.funtranslations.com/translate/shakespeare?text=" +
      textToTranslate.text
  );
  const jsonShakesPTranslator = await shakesPTranslator.json();

  return {
    name: jsonPokemonData.name,
    description: jsonShakesPTranslator.contents.translated,
    sprite: jsonPokemonData.sprites.front_default,
  };
};

export { createDataScript };

/*jsonShakesPTranslator.contents.translated,
"Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          */

/*
          {
      method: "POST",
      credentials: "omit",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(textToTranslate),
    }*/
