import React,{ useState } from "react"


const NovoValor = ()=>{

    //criar o STATE
    const [frase,setFrase] = React.useState('')

    return(
        <div>
            <h2>Vamos escrever uma frase</h2>
            <label>Motivação:</label>
            <input type="text" onChange={(e)=>setFrase(e.target.value)}/>
            <p>Morivação do dia : {frase}</p>
        </div>
    )
}
export default NovoValor;