import { useContext, useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { AppContext } from "./Store/AppContext";
import Item from "./Components/Item";

function App() {
  const movies = useContext(AppContext);


  console.log(movies);
  return (
    <div className="App">
      <h1>Hola mundo</h1>
    
      {movies?.map(movie => <Item key={movie.id} movie={movie} />)}
      

    </div>
  );
}

export default App;
