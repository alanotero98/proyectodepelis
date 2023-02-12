import Prueba from "./Prueba"


const Item = (props) => {
  
  
 
  console.log(props)

  return (
    
      <>

        <div className="card mb-3" style={{maxWidth: "560px"}}>
          <div className="row g-0">
            <div className="col-md-4">
            <img  className="img-fluid rounded-start" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt="Foto de la Pelicula" />
             
            </div>
          <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{color: "white"}}>{props.movie.title}</h5>
                <p className="card-text" style={{color: "white"}}>{props.movie.overview.substr(0,180)}</p>
              <div className="botones">
              
              
              <button className="Boton2" >Agregar a favoritos</button>
              </div>
              </div>
            </div>
          </div>
        </div>
       

      </>

  )
}

export default Item