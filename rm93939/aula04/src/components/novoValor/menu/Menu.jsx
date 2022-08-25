import React from "react"
import { Link } from "react-router-dom";

const Menu = ()=>{
    return(
        <div>
        <header>
            <nav>
                <ul>
                    <li><Link to="/nv">Novo Valor</Link></li>
                     <li><Link to="/cadastro">Cadastro</Link></li>      
                </ul>
            </nav>
        </header>
        </div>
    )
}

export default Menu;