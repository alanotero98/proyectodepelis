import React from 'react';


const CardVer = (props) => {
    console.log(props);
  return (
    <>
    
    <div className="card text-bg-dark">
  <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">{props.movie.title}</h5>
    <p className="card-text">{props.movie.overview.substr(0,180)}</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
    </>
  )
}

export default CardVer



