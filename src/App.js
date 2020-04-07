import React from 'react';

//import il componente Route da react-router-dom, in seconda battuta uso Switch component
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";


//***, Nota switch lo ho aggiunto dopo per fare il wrapping di Route component
//Nota Header va fuori dallo switch perché é sempre presente
class App extends React.Component{
    constructor(){
        super();

        this.state = {
            currentUser: null
        }

    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // this.setState({ currentUser: user });
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    // console.log(snapshot.data())
                    this.setState({
                        currentUser:{
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }, () => {
                        console.log(this.state)
                    })
                })
            }else{
                this.setState({currentUser: userAuth})
            }

            // console.log(user)
        })
    }


    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render() {
        return(
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUp}/>
                </Switch>
            </div>
        )
    }
}
//Nota a margine le props di Route sono abbastanza esplicative solo exact che non è espresso è un boolenano, se è false è come un RenderPartial, se non voglio usarlo
//mi basta fare il wrapper di Route component in Switch

export default App;
