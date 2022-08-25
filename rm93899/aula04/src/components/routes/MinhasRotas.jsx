import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NovoValor from '../novoValor/NovoValor'
import Formulario from '../formulario/Formulario'



export default function routes() {
  return (
    <>
      <Routes>
        <Route path="/nv" element={<NovoValor />} />
        <Route path="/form" element={<Formulario />} />
      </Routes>
    </>
  )

}
