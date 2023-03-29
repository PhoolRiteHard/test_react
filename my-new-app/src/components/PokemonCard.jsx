import React from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const [pokemonIndex, setPokemonIndex] = React.useState(0);
  const pokemon = pokemonList[pokemonIndex];

  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
      <button onClick={() => setPokemonIndex((pokemonIndex + 1) % 2)}>
        Next
      </button>
    </figure>
  );
}

export default PokemonCard;