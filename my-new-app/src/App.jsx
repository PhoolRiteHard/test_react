import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
// import  style  from "./App.css";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


  const [pokemonIndex, setPokemonIndex] = useState(0);

  let pokemon = pokemonList[pokemonIndex];

  const handelClickNext = () => {
    if (pokemonIndex >= pokemonList.length - 1) {
      alert("retourne à la page précédente");
    } else {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const handelClickPrevious = () => {
    if (pokemonIndex <= 0) {
      alert("passe à la page suivante");
    } else {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <>
      <PokemonCard data={pokemon} />
      <button onClick={handelClickNext}>Next</button> <br />
      <button onClick={handelClickPrevious}>Previous</button>
    </>
  );
}

export default App;