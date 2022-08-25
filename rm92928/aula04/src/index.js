import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>

,document.getElementById('root'));

// Envolvendo o app pelo browserrouter dá condição à aplicação inteira usar os routes