import React from "react"

import Menu from "./components/menu/Menu";

import MinhasRotas from './routes/MinhasRotas';


export default function App(){

    return(
       <div>
        <h1>APP</h1>
        <Menu/>
        <MinhasRotas/>
       </div>
    
    )
}