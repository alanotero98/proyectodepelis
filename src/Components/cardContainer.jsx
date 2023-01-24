import React, { useContext } from 'react'
import { AppContext } from '../Store/AppContext';

const cardContainer = () => {
    const movies = useContext(AppContext);


    console.log(movies);
    return (
    // {movies?.map(movie => <Item key={movie.id} movie={movie} />)}
  )
}

export default cardContainer