import React from "react";
import {useState} from "react";

export default function Formulario(){

    const [carro, setCarro] = useState({"marca": "", "modelo": ""});

    const mostraCarro = (e) => {
        //Realizando o Destructuring
        const {name, value} = e.target;

        //Estrutura de decisão para saber qual foi o input alterado
        //pegando o seu valor e adicionando no objeto/STATE
        if(name == "marca"){
            setCarro({"marca" : value, "modelo" : carro.modelo});
        }else if(name == "modelo"){
            setCarro({"marca" : carro.marca, "modelo" : value});
        }

    }

    return(
        <div>
            <h1>Formulário de Cadastro de Veículos</h1>
            <label>Marca:</label>
            <input type="text" name="marca" onChange={mostraCarro} /> <br />
            <label>Modelo:</label>
            <input type="text" name="modelo" onChange={mostraCarro} /> <br />

            <p>O veículo cadastrado foi - Marca: <b>{carro.marca}</b>  Modelo: <b>{carro.modelo}</b></p>
        </div>
    )
}