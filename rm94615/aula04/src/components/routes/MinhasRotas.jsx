import React from 'react';
import NovoValor from '../novoValor/NovoValor';
import { Route, Routes } from 'react-router-dom';
import Formulario from '../formulario/Formulario';

export default function routes() {
  return (
    <>
        <Routes>
            <Route path="/nv" element={<NovoValor/>} />
            <Route path="/cadastro" element={<Formulario/>} />
        </Routes>
    </>
  )
}
