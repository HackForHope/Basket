import React from "react";
import AddCartItem from "./AddCartItem";

const Item = ({ name, price }) => {
    return (
        <div className='sqrBlock'>
            <p>{name}</p>
            <p> $ {price}</p>
            
            <AddCartItem name={name} price={price}></AddCartItem>
        </div>
    );
};

export default Item;