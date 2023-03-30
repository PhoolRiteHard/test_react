import PropTypes from "prop-types";

function PokemonCard({data}) {

console.log(data)

  // function displayPoke(pokemon) {
  //   if (pokemon.imgSrc) {
  //     return <img src={pokemon.imgSrc} alt="" />
  // } else {
  //   return <p>???</p>
  // } }
    return (
    <div>
      <figure className="poke">
        { data.imgSrc ? <img src={data.imgSrc}/> : <p> ??? </p>}
      </figure>
    </div>
  )
}
PokemonCard.propsTypes = {
  props: PropTypes.shape({
      name : PropTypes.string.isRequired,
      imgSrc : PropTypes.string.isRequired,
    }).isRequired,
}




export default PokemonCard