const Item = (props) => {
    console.log(props)
  return (
    <>
    <h2>{props.movie.title}</h2>
    <p>{props.movie.overview}</p>
    </>
  )
}

export default Item