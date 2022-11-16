import React from 'react'
import { Link } from "react-router-dom";

export const ProductoItem = ({
  id,
  title,
  price,
  image,
  category,
  description
}) => {

  
  return (
    <div>
      <div className='producto'>
        <a href=''>
          <div className='producto__img'>
            <img src={image} alt={title} />
          </div>
        </a>


        <div className="producto__footer">
          <h1> {title}</h1>
          <p>{category}</p>
          <p className="price">$ {price}  </p>
          <p className="description"> {description} </p>
        </div>
        <div className="buttom">
          <button className="btn">Añadir al carrito
          </button>
          <div>
          <Link to={`/producto/${id}`} className="btn">Detalles</Link>
          </div>

        </div>

      </div>
    </div>
  )
}
