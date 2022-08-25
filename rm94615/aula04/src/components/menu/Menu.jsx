import React from 'react';
import {Link} from "react-router-dom";

export default function menu() {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to="/nv">Novo Valor</Link></li>
                <li><Link to="/cadastro">Cadastro</Link></li>
            </ul>
        </nav>
    </header>
  )
}
