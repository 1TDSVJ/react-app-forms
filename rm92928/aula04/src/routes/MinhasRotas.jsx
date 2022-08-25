import React from "react";
import { Route, Routes } from "react-router-dom";
import Formulario from "../components/formulario/Formulario";
import NovoValor from "../components/novoValor/NovoValor";

export default function MinhasRotas (){
    return(
        <>
            <Routes>
                <Route path="/nv" element={<NovoValor />} />
                <Route path="/cadastro" element={<Formulario />} />
            </Routes>
        </>
    )   
}