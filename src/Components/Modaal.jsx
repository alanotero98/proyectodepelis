import Prueba from '../Prueba'

import React from 'react'
import { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';



const Favoritos = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
     <Button variant="primary" onClick={handleShow}>
              Ver mas...
      </Button>

      <Prueba show={show} handleClose={handleClose}/>
    </div>
  )
}

export default Favoritos