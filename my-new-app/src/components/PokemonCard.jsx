import PropTypes from 'prop-types';

function PokemonCard(props) {
return props.imgSrc ? (
<figure>
<img src={props.imgSrc} alt={props.name} />
<figcaption>{props.name}</figcaption>
</figure>
) : (
<p>
???
<figcaption>{props.name}</figcaption>
</p>
);
}

PokemonCard.propTypes = {
pokemon: PropTypes.shape({
name: PropTypes.string.isRequired, imgSrc: PropTypes.string}).isRequired
};

export default PokemonCard;
