import { useContext, useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { AppContext } from "./Store/AppContext";
import Item from "./Components/Item";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const movies = useContext(AppContext);


  console.log(movies);
  return (
    <div className="App">
      <div className="navBar"><nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Movies</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        <a className="nav-link" href="#">Favoritos</a>
        <a className="nav-link" href="#">Busqueda</a>
      </div>
    </div>
  </div>
</nav> </div>


    
      {movies?.map(movie => <Item key={movie.id} movie={movie} />)}
      

    </div>
  );
}

export default App;
