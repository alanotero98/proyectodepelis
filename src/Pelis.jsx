import React from 'react'
import { useContext, useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { AppContext } from "./Store/AppContext";
import Item from "./Components/Item";


const Pelis = () => {
    const movies = useContext(AppContext);
  return (
    <div>
      {movies?.map(movie => (<Item key={movie.id} movie={movie} />))}
      
      
    </div>
  )
}

export default Pelis