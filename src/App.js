import React from 'react';

//import il componente Route da react-router-dom, in seconda battuta uso Switch component
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';


//indico quelle che sono le "pagine", in questo momento Hats page è una pagina diversa dalla home page
const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);


//Questo era il codice prima del Route Component, il nuovo codice segue il commento ***
// function App() {
//   return (
//     <div>
//       <HomePage/>
//     </div>
//   );
// }

//***, Nota switch lo ho aggiunto dopo per fare il wrapping di Route componetn
    function App() {
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/hats' component={HatsPage}/>
                </Switch>
            </div>
        )
    }
//Nota a margine le props di Route sono abbastanza esplicative solo exact che non è espresso è un boolenano, se è false è come un RenderPartial, se non voglio usarlo
//mi basta fare il wrapper di Route component in Switch

export default App;
