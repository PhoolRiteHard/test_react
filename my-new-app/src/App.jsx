
import './App.css'
import PokemonCard from './components/PokemonCard'
const pokemon = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  }
];

function App() {

  return (
  <div className="App">
    <PokemonCard name = {pokemon[0].name} imgSrc = {pokemon[0].imgSrc}/>
  </div>);
}

export default App
