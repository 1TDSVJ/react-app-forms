import React from 'react'
import { Link } from 'react-router-dom';
import MinhasRotas from '../../routes/MinhasRotas';


export default function Menu() {
  return (
    <div>
    <h1>APP</h1>
    <header>
        <nav>
            <ul>
                <li><Link to="/nv">Novo Valor</Link></li>
                <li><Link to="/cadastro">Cadastror</Link></li>
            </ul>
        </nav>
    </header>
    <MinhasRotas />
</div>
  )
}
