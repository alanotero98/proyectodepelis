import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppContextProvider } from './Store/AppContext';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Components/Routes/Inicio';
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <BrowserRouter>
    <Routes>
         <Route path='/' element={<Inicio />} />
        {/*<Route path='/Favoritos' element={<Favoritos />} />
        <Route path='/Busqueda' element={<Busqueda />} />
        <Route path='*' element={<Error />} /> */}
    
    </Routes>
    </BrowserRouter>
    <App />
    </AppContextProvider>

    
);


