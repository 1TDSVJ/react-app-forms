import React, {useState} from 'react'

export default function NovoValor(){

//Criar o STATE 
const {frase, setFrase} = useState('')

    
    return(
        <div>
            <h2>Vamos escrever uma frase </h2>
            <label > Motivação:</label>
            <input type="text" onChange={(e)=> setFrase(e.target.value)}/>
            <p>Motivação do dia: {frase}</p>

        </div>
    )
}