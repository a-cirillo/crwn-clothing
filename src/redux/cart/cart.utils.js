//gli passo due argomenti i carts items che esistono, e i cart item che voglio aggiungere
export const addItemToCart = (cartItems, cartItemToAdd) => {
    //voglio per prima cosa controllare se il cartItemToAdd esiste già all'interno dei cartItems

    //nota il find ti restituisce il primo item nell'array, nel nostro caso cartItems che rispetta una determinata condizione
    //quello che adesso che scrivero all'inteno del find e tipo un foreach in php, l'argomento è il singolo item a iterazione esaminato foreach (cartItems as cartItem)
    //dopo le frecce di funzione ho la condizione sul singolo item
    //nel mio esempio boglio vedere se esiste già un item con lo stesso id
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    //ora faccio il check su existingCartItems che potrà essere true o false
    if(existingCartItem){
        //anche map è iterativo come il foreach
        return cartItems.map(
            cartItem =>
                cartItem.id === cartItemToAdd.id
                //nota questo modo di scrivere significa restituiscimi tutto l'item così come è ma modifica gli attributi specifici che ti passo dopo
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }else{
        //se non esiste ti restituisco un nuovo array, dove ci sono tutti i cartItems, con la scrittura ...cartItems, già esistenti più quello toAdd
        return [...cartItems, {...cartItemToAdd, quantity: 1}];
    }
};

export const clearItem = (cartItems, cartItemToClear) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToClear.id
    );

    //ora faccio il check su existingCartItems che potrà essere true o false
    if(existingCartItem){
        //anche filter è iterativo come il foreach
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToClear.id
        );

    }else{
        return [...cartItems];
    }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );


    if(existingCartItem.quantity === 1){
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
        );
    }

    //ora faccio il check su existingCartItems che potrà essere true o false
    if(existingCartItem){
        //anche filter è iterativo come il foreach
        return cartItems.map(
            cartItem =>
                cartItem.id === cartItemToRemove.id ?
                    {...cartItem, quantity: cartItem.quantity - 1}
                    :
                    cartItem
        );

    }else{
        return [...cartItems];
    }
};