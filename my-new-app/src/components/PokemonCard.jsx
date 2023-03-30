import PropTypes from "prop-types";

function PokemonCard(data) {

    return (
    <div>
      <figure className="poke">
        { data.data.imgSrc ? <img src={data.data.imgSrc}/> : <p> ??? </p>}
      </figure>
    </div>
  )
}
PokemonCard.propTypes = {
  data : PropTypes.shape({
  data : PropTypes.shape({
      name : PropTypes.string.isRequired,
      img : PropTypes.string.isRequired,
    })
}).isRequired,
};




export default PokemonCard