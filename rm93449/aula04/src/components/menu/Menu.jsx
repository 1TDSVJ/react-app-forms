import React from 'react';
import {Link} from "react-router-dom"


export default function Menu() {
    return(
        <div>
            <h1>APP</h1>
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