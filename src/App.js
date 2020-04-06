import React from 'react';

//import il componente Route da react-router-dom, in seconda battuta uso Switch component
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';


//Questo era il codice prima del Route Component, il nuovo codice segue il commento ***
// function App() {
//   return (
//     <div>
//       <HomePage/>
//     </div>
//   );
// }

//***, Nota switch lo ho aggiunto dopo per fare il wrapping di Route component
//Nota Header va fuori dallo switch perché é sempre presente
    function App() {
        return(
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                </Switch>
            </div>
        )
    }
//Nota a margine le props di Route sono abbastanza esplicative solo exact che non è espresso è un boolenano, se è false è come un RenderPartial, se non voglio usarlo
//mi basta fare il wrapper di Route component in Switch

export default App;
