const Item = (props) => {
    console.log(props)
  return (
    <>
    <h2>{props.movie.title}</h2>
    <p>{props.movie.overview}</p>
    <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt="" />
    </>
  )
}

export default Item