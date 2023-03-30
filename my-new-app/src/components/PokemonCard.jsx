import PropTypes from "prop-types";

function PokemonCard({data}) {

    return (
    <div>
      <figure className="poke">
        { data.imgSrc ? <img src={data.imgSrc}/> : <p> ??? </p>}
      </figure>
    </div>
  )
}
PokemonCard.propTypes = {
  data: PropTypes.shape({
      name : PropTypes.string.isRequired,
      imgSrc : PropTypes.string,
    }).isRequired,
}




export default PokemonCard