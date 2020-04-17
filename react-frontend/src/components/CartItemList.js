import React, { useState, useContext } from "react";
import CartItem from './CartItem';
import { SearchContext } from './SearchContext';
import { CartContext } from './CartContext';

const CartItemList = () => {
    const [Carts, setCarts] = useContext(CartContext)
    return (
        <div className="multiBlock">
            {Carts.map(item => (
                <CartItem name={item.name} price={item.price} quantity={item.quantity} key={item.id} />
            ))}
        </div>
    );
}

export default CartItemList;