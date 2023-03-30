import PropTypes from "prop-types";

function PokemonCard({data}) {

    return (
    <div>
      <figure className="poke">
        <div className="img">
        { data.imgSrc ? <img src={data.imgSrc}/>  : <p> ??? </p>}
        </div>
        <figcaption>bulbasaur</figcaption>

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