function PokemonCard (pokemon) {

return pokemon.pokemon.imgSrc !== undefined ?
<figure>
  <img src={pokemon.pokemon.imgSrc} alt={pokemon.pokemon.name} />
  <figcaption>{pokemon.pokemon.name}</figcaption>
</figure>
:
<figure>
  <p>???</p>
  <figcaption>{pokemon.pokemon.name}</figcaption>
</figure>
}

export default PokemonCard;