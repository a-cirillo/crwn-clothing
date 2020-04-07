import React from 'react';
import ReactDOM from 'react-dom';
//faccio l'import per il routing, che poi userò come componente
import { BrowserRouter } from 'react-router-dom';
//faccio l'import del provider da react redux
import { Provider } from 'react-redux';
import store from './redux/store';

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
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);