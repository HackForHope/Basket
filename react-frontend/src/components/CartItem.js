import React from "react";
import AddItem from "./AddItem";


const CartItem = ({ name, price, quantity, key }) => {
    return (
        <div className='sqrBlock'>
            <p>This is a CartItem</p>
            <p>{name}</p>
            <p> $ {price}</p>
            <p> Quantity: {quantity}</p>
            <p> Sum: {price * quantity}</p>

        </div>
    );
};

export default CartItem;