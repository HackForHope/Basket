import React, { useState, useContext } from 'react';
import { ItemContext } from './ItemContext'
const AddItem = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [items, setItems] = useContext(ItemContext);

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updatePrice = (e) => {
        setPrice(e.target.value);
    };

    const addItem = e => {
        e.preventDefault();
        setItems(prevItems => [...prevItems, { name: name, price: price, id: prevItems.length }])
    };

    return (
        <div>
            <p>Add Item: (name|price) </p>
            <form onSubmit={addItem}>
                <input type="text" name="name" value={name} onChange={updateName} />
                <input type="number" name="price" value={price} onChange={updatePrice} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddItem