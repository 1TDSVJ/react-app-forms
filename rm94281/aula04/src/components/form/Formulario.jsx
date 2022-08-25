import React, { useState } from 'react';

export default function Formulario() {
  const [carro, setCarro] = useState({ marca: '', modelo: '' });

  const mostraCarro = (e) => {
    // destructuring
    const { name, value } = e.target;

    // estrutura de decisão para saber qual foi o input alterado
    if (name == 'marca') {
      setCarro({ marca: value, modelo: carro.modelo });
    } else if (name == 'modelo') {
      setCarro({ marca: carro.marca, modelo: value });
    }
  };

  return (
    <div>
      <h1>Formulário de Cadastro de Veículos:</h1>
      <label htmlFor='marca'>Marca: </label>
      <input type='text' name='marca' onChange={mostraCarro} /> <br />
      <label htmlFor='modelo'>Modelo: </label>
      <input type='text' name='modelo' onChange={mostraCarro} /> <br />
      <p>
        O veículo cadastrado foi - Marca: {carro.marca} Modelo: {carro.modelo}
      </p>
    </div>
  );
}
