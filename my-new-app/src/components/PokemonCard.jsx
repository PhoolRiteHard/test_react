function PokemonCard(data) {

    return (
    <div>
      <figure className="poke">
        { data.data.imgSrc ? <img src={data.data.imgSrc}/> : <p> ??? </p>}
      </figure>
    </div>
  )
}



export default PokemonCard
