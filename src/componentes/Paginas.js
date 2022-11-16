import React from 'react'
import {Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductoLista } from "./Productos/index";
import { ProductoDetalles } from "./Productos/ProductoDetalles";

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Productos" element={<ProductoLista />} />
                <Route path="/producto/:id" element={<ProductoDetalles />}/>
            </Routes>


        </section>


    )
}
