import { cartActionTypes } from './cart.types'

//faccio l'import di utils
import { addItemToCart, clearItem, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
            break;

        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                //faccio il replace di qusto codice aggiungendo quello messo in utils
                //ricordiamo che il payload può essere qualsiasi cosa, nel caso specifico è un oggetto cart items
                // cartItems: [...state.cartItems, action.payload]
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
            break;

        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                //faccio il replace di qusto codice aggiungendo quello messo in utils
                //ricordiamo che il payload può essere qualsiasi cosa, nel caso specifico è un oggetto cart items
                // cartItems: [...state.cartItems, action.payload]
                cartItems: clearItem(state.cartItems, action.payload)
            };
            break;

        case cartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
            break;

        default:
            return state;
    }
};

export default cartReducer;