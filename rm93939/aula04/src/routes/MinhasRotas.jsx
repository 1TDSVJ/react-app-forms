import React from "react"
import { Route, Routes } from "react-router-dom";
import Formulario from "../components/formulario/Formulario";
import NovoValor from "../components/novoValor/NovoValor";

const MinhasRotas = ()=>{
    return(
        <>
        <Routes>
            <Route>
                <Route path="/" element={<NovoValor />} />
                <Route path="/cadastro" element={<Formulario />} />
            </Route>
        </Routes>
        </>
    )

}

export default MinhasRotas;