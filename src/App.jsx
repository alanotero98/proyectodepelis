import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [movies, setMovies] = useState ();
  useEffect ( () => {
    Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=105ef506113a9330e3d7e83f97a9405d").then ((response) => {setMovies (response.data.results); console.log(response.data.results)}
    ).catch ((error) => console.error(error))

  }, [])


  console.log(movies);
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <ul>
      {movies?.map(movie => <li key={movie.id}>{movie.title} </li>)}
      </ul>

    </div>
  );
}

export default App;
