import PokemonCard from "./components/PokemonCard";
import './App.css';

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

function App() {
const [pokemonIndex, setPokemonIndex] = React.useState(0);
const pokemon = pokemonList[pokemonIndex];

return (
<div>
<PokemonCard pokemon={pokemon} />
<button onClick={() => setPokemonIndex((pokemonIndex + 1) % 2)}>
Next
</button>
</div>
);
}

export default App;
