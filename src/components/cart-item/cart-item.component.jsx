import React from 'react';

import './cart-item.styles.scss';
/*
facciamo dei piccoli commenti: in generale un oggetto item è di questo tipo
{
    id: 35,
    name: 'Burgundy T-shirt',
    imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
    price: 25
}
in più abbiamo la proprietà quantity che gestiamo nello stato glabale;
{item : {imageUrl, price, name}} questo tipo di scrittura come parametro del componente indica... ti sto passando un oggetto completo, come quello di cui sopra,
le proprierà che mi serviranno sono imageUrl, price, name.
Una cosa simile l'avevamo vista con gli state quando indicavamo nel render dei componenti di tipo classe questo const {displayName, email, password, confirmPassword} = this.state;
 */

const CartItem = ({item : {imageUrl, price, name, quantity}}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItem;