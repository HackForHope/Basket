import React, { useState, useContext } from "react";
import Item from './Item';
import { ItemContext } from './ItemContext';

const ItemList = () => {
    const [items, setItems] = useContext(ItemContext)
    return (
        <div className="multiBlock">
            {items.map(item => (
                <Item name={item.name} price={item.price} key={item.id} />
            ))}
        </div>
    );
}

export default ItemList;