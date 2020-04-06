import React from 'react';
import ReactDOM from 'react-dom';

//faccio l'import per il routing, che poi userò come componente
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';


//questo era il codice prima di importare il BrowserRouter
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);