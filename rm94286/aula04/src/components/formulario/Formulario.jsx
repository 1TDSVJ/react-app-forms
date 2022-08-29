import React, { useState } from "react";

export default function Formulario() {
  const [carro, setCarro] = useState({ marca: "", modelo: "" });

  const mostraCarro = (e) => {
    // Destructuring
    const { name, value } = e.target;

    // Estrutura de decisão para saber qual foi o input alterado
    // Pegando seu valor e adicionando no objeto/state
    if (name === "marca") {
      setCarro({ marca: value, modelo: carro.modelo });
    } else if (name === "modelo") {
      setCarro({ marca: carro.marca, modelo: value });
    }
  };

  return (
    <div>
      <h1>Formulário de Cadastro de veículos</h1>
      <label>Marca: </label>
      <input type="text" name="marca" onChange={mostraCarro} /> <br />
      <label htmlFor="">Modelo: </label>
      <input type="text" name="modelo" onChange={mostraCarro} /> <br />
      <p>O veículo cadastrado foi - Marca: <strong>{carro.marca}</strong> Modelo: <strong>{carro.modelo}</strong></p>
    </div>
  );
}
