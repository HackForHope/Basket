import React, { useState, createContext } from 'react';

export const ItemContext = createContext();

export const ItemProvider = props => {
    const [items, setItems] = useState([
        {
            name: "Apple",
            price: 1,
            id: 0
        },
        {
            name: "pen",
            price: 10,
            id: 1
        },
        {
            name: "pineapple",
            price: 11,
            id: 2
        },
        {
            name: "penPineapple",
            price: 10,
            id: 3
        }
    ]);
    return (
        <ItemContext.Provider value={[items, setItems]}>
            {props.children}
        </ItemContext.Provider>
    );
}

