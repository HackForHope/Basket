import React, { useState, useContext } from 'react';
import { ItemContext } from './ItemContext'
import { CartContext } from './CartContext'
import CartItem from './CartItem';
const AddCartItem = (props) => {
    const [items, setItems] = useContext(CartContext);

    var n = props.name;
    var p = props.price;

    const addItem = () => {
        var change = false;
        setItems(prevItems => [...prevItems, { name: n, price: p, quantity: 1, id: prevItems.length }])
    };

    return (
        <div>
            <button onClick={addItem}> Add to Cart</button>
        </div>
    );
}

export default AddCartItem