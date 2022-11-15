import React from 'react'
import {Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductoLista } from "./Productos/index";

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Productos" element={<ProductoLista />} />
            </Routes>


        </section>


    )
}
