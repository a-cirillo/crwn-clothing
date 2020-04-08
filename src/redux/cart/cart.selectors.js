/*
Esistono due tipi di selector, uno è l'imput selector l'altro è l'output selector
 */

import { createSelector } from 'reselect';

//l'input selector è una funzione, a cui passiamo lo state e ci torna una parte di esso
const selectCart = state => state.cart;


//a createSelector si passano due argomenti, il primo è la collection come array nel nostro caso [selectCart]
//il secondo argomento è un funzione che restituisce il valore che vogliamo
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity * cartItem.price,
            0
        )
);

/*
NOTA BENE SE AVESSI AVUTO DUE INPUT SELECT
const selectCart = state => state.cart;
const selectUser = state => state.user;

avrei avuto

export const selectCartItems = createSelector(
    [selectCart, selectUser],
    (cart, user) =>

);
 */
