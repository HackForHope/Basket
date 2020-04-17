import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
    const [Carts, setCarts] = useState([
        {
            name: "Nothing",
            price: 0,
            quantity: 0,
            id: 0
        }
    ]);
    return (
        <CartContext.Provider value={[Carts, setCarts]}>
            {props.children}
        </CartContext.Provider>
    );
}

