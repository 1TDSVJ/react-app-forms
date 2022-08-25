import React, { useState } from 'react';

// import { Container } from './styles';

export default function Formulario() {


    const [carro, setCarro] = useState({"marca":"","modelo":""})

    const mostraCarro = (e) => {
        //realizando o Destructuring
        const {name, value} = e.target

        //estrutura de decisão para saber qual foi o imput alterado
        //pegando o seu valor e adicionando no objeto/State
        if(name == "marca") {
            setCarro({"marca": value, "modelo": carro.modelo })
        } else if (name == "modelo"){
            setCarro({"marca": carro.marca, "modelo": value })
        }
    }
  return (
    <div>
        <h1>Formulário de cadastro de veículos</h1>
        <label>Marca: </label>
        <input type="text" name="marca" onChange={mostraCarro} /> <br/>
        <label>Modelo: </label>
        <input type="text" name="modelo" onChange={mostraCarro} /> <br/>

        <p>O veículo cadastrado - Marca: <b>{carro.marca}</b> Modelo: <b>{carro.modelo}</b></p>
    </div>
  )
}