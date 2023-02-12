import { useContext, useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { AppContext } from "./Store/AppContext";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "./Components/Routes/Inicio";
import Favoritos from "./Components/Routes/Favoritos";



function App() {
 
  return (
    <>

    <NavBar />
    <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/Favoritos' element={<Favoritos/>} />
            
      </Routes>
    
    </>
   );
}

export default App;
