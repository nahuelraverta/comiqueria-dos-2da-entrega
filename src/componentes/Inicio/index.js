import React from 'react'
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className='inicio'>
      <Link to="/">
        <h1>Inicio</h1></Link>
        <Link to="/Productos">
        <h1>Productos</h1></Link>
        <img src="https://th.bing.com/th/id/R.5a76e9f297514f80428ab4a5748a1815?rik=JlqK1g43YW3Mmg&pid=ImgRaw&r=0" alt='Inicio'/>
        </div>
  )
}
