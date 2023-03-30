 function navBar({pokemonIndex, setPokemonIndex, pokemonList}) {

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


  return(
    <div>
      <button onClick={handelClickNext}>Next</button> <br />
      <button onClick={handelClickPrevious}>Previous</button>
    </div>
  )
}

export default navBar