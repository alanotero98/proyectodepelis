import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from '../Components/Inicio'

const AppRoutes = () => {
  return (
    <Routes>
         <Route path='/' element={<Inicio />} />
        {/*<Route path='/Favoritos' element={<Favoritos />} />
        <Route path='/Busqueda' element={<Busqueda />} />
        <Route path='*' element={<Error />} /> */}
    
    </Routes>
  )
}

export default AppRoutes