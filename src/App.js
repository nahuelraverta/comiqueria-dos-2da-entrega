import "boxicons";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./componentes/Header";
import { Inicio } from "./componentes/Inicio";
import { ProductoLista } from "./componentes/Productos";
import { DataProvider } from "./context/Dataprovider";


function App() {
  return (
      <BrowserRouter>
          <DataProvider>
              <div className='App'>
                  <Header />
                  <Routes>
                      <Route path='/' element={<Inicio />} />
                      <Route path='/Productos' element={<ProductoLista />} />
                  </Routes>
              </div>
          </DataProvider>
      </BrowserRouter>
  );
}
export default App;
