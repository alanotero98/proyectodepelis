import axios, { Axios } from 'axios';
import React, { Children, createContext, useEffect, useState } from 'react'

const AppContext = createContext ();

const AppContextProvider = ({ children }) => {
    const [movies, setMovies] = useState ([]);
  useEffect ( () => {
    axios 
    .get("https://api.themoviedb.org/3/movie/popular?api_key=105ef506113a9330e3d7e83f97a9405d")
    .then ((response) => {setMovies (response.data.results); console.log(response.data.results)}
    ).catch ((error) => console.error(error))

  }, [])
    return (
        <AppContext.Provider value={movies}>{children}</AppContext.Provider>
    )
};

export { AppContext, AppContextProvider}; 