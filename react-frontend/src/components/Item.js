import React from "react";

const Item = ({ name, price, key }) => {
    return (
        <div className='sqrBlock'>
            <h3>{name}</h3>
            <p> $ {price}</p>
        </div>
    );
};

export default Item;