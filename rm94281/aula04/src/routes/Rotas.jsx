import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Formulario from '../components/form/Formulario';
import NovoValor from '../components/novoValor/NovoValor';

export default function Rotas() {
  return (
    <Routes>
      <Route path='/nv' element={<NovoValor />} />
      <Route path='/cadastro' element={<Formulario />} />
    </Routes>
  );
}
