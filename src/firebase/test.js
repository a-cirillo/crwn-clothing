import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('user_id').collection('cart_items').doc('cart_items_id');

//che è equivalente a scrivere
firestore.doc('/users/user_id/cart_items/cart_items_id');

//oppure
firestore.collection('/users/user_id/cart_items');

//dipende se voglio un document o una collection