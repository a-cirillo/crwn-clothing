import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchProps = dispatch => ({
   toggleCartHidden: () => dispatch(toggleCartHidden())
});

// //faccio il map state to props perché voglio vedere il numero all'interno del carrello
// const mapStateToProps = ({cart: {cartItems}}) => ({
//     //per quanto riguarda reduce è una funzione javascript, il primo argomento è una funzione (che ha due parametri di cui il secondo è il singolo item nell'each e il primo è un accumulatore),
//     //il secondo il valore di default
//
//     itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
// });

// const mapStateToProps = state => ({
//    itemCount: selectCartItemsCount(state)
// });

const mapStateToProps = createStructuredSelector({
   itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchProps)(CartIcon);