import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NovoValor from '../components/novoValor/NovoValor';
import Formulario from "../components/formulario/Formulario"

function routes() {
  return(
    <>
        <Routes>
            <Route path="/nv" element={<NovoValor/>}></Route>
            <Route path="/cadastro" element={<Formulario></Formulario>}></Route>
        </Routes>
    </>
  )
}

export default routes;