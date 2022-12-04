import "boxicons";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./componentes/Header";
import { Inicio } from "./componentes/Inicio";
import { ProductoLista } from "./componentes/Productos";
import { DataProvider } from "./context/Dataprovider";
import { ProductoDetalles } from "./componentes/Productos/ProductoDetalles";
import {Carrito} from "./componentes/Carrito"


function App() {
  return (
      <BrowserRouter>
          <DataProvider>
              <div className='App'>
                  <Header />
                  <Carrito/>
                  <Routes>
                      <Route path='/' element={<Inicio />} />
                      <Route path='/Productos' element={<ProductoLista />}/>
                      <Route path="/producto/:id" element={<ProductoDetalles />}/>
                  </Routes>
              </div>
          </DataProvider>
      </BrowserRouter>
  );
}
export default App;
