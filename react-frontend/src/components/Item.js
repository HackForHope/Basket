import React from "react";
import AddCartItem from "./AddCartItem";

const Item = ({ name, price, key }) => {
    return (
        <div className='sqrBlock'>
            <p>{name}</p>
            <p> $ {price}</p>
            <AddCartItem name={name} price={price}></AddCartItem>
        </div>
    );
};

export default Item;