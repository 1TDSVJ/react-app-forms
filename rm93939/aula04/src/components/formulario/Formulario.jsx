import React,{ useState } from "react"

const Formulario = ()=>{

    const [carro,setCarro] = useState({"marca":"","modelo":""})

    const mostraCarro = (e)=>{
        //Realizando o Destructuring
        const {name,value} = e.target
        
        //Estruturra de decisão para saber qual foi o input alterado 
        //pegando o seu valor e adicionando no objeto/STATE
        if(name == "marca"){
            setCarro({"marca":value,"modelo":carro.modelo})
        }else if(name == "modelo"){
            setCarro({"modelo":value,"marca":carro.marca})
        }
    }

    return(
        <div>
            <h1>Formulario de Cadastro de Veiculos</h1>
            <label>Marca:</label>
            <input type="text" name="marca" onChange={mostraCarro}/> <br/>
            <label>Modelo:</label>
            <input type="text" name="modelo" onChange={mostraCarro}/><br/>

            <p>O veiculo cadastrado foi - Marca: <b>{carro.marca}</b> Modelo: <b>{carro.modelo}</b></p>
        </div>
    )
}

export default Formulario;