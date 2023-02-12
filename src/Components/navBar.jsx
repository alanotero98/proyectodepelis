import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    
  
    <div className="NavBar"><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Movies</a>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <NavLink className="nav-link" aria-current="page" to="/">Inicio</NavLink>
        <NavLink className="nav-link" to="/Favoritos">Favoritos</NavLink>
        
        
        </div>
      </div>
    </div>
  </nav>
  </div>

  )
}

export default NavBar