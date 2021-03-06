import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { withRouter } from 'react-router-dom'

import CustomButton from '../../components/custom-button/custom-button.component';
import CartItem from '../../components/cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

//il map delle action non è necessario... basta passare dispatch come props
const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className='cart-dropdown'>
      <div className='cart-items'>
      {
          cartItems.length ?
              (
                cartItems
                    .map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}></CartItem>
                    ))
              )
          : (
                <span className='empty-message'>Your cart is empty</span>
            )
      }
      </div>
      {/*Prima del dispatch*/}
      {/*<CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>*/}

      <CustomButton onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden())
      }
      }>GO TO CHECKOUT</CustomButton>
  </div>
);

//l'argomento state è il routeReducer
// const mapStateToProps = ({cart: { cartItems }}) => ({
//     cartItems
// });

// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// });
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
