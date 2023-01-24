import { useContext, useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { AppContext } from "./Store/AppContext";
import Item from "./Components/Item";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  NavBar  from "./Components/NavBar";
import Card from "./Components/Card";


function App() {
  const movies = useContext(AppContext);
  return (
    <div className="App">
      <NavBar />
      {/* <Card />  */}
      {movies?.map(movie => <Item key={movie.id} movie={movie} />)}
      

    </div>
  );
}

export default App;
