import React, { useContext, useState, useEffect  } from "react";
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";


export const ProductoDetalles = () =>{

const value = useContext(DataContext)
const [productos] = value.productos;
const [detalle, setDetalle] = useState([])
const params = useParams();


//console.log(params.id);

useEffect(() =>{
    productos.forEach(producto =>{
        console.log(producto.id, parseInt(params.id))
        if(producto.id === parseInt(params.id)){
            setDetalle(producto)

        }
    })
}, [params.id, productos])




    return(
        
        <div>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <h1>Detalles del producto</h1>
            <div className='producto__img'>
            <img src={detalle.image} alt={detalle.title} />
          </div>
            <h2>{detalle.title}</h2>
            <p>{detalle.description}</p>
        </div>
    )
}