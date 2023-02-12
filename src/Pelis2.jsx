import React from 'react'
import { useContext, useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { AppContext } from "./Store/AppContext";
import Item from "./Components/Item";
import CardVer from './Components/CardVer';


const Pelis2 = () => {
    const movies = useContext(AppContext);
  return (
    <div>
      {movies?.map(movie => (<CardVer key={movie.id} movie={movie} />))}
      
      
    </div>
  )
}

export default Pelis2