import React, { useState, useContext } from 'react';
import { ItemContext } from './ItemContext'
import { SearchContext } from './SearchContext'
import { CartContext } from './CartContext'

const AddItem = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [items, setItems] = useContext(ItemContext);
    const [Searchs, setSearchs] = useContext(SearchContext)

    const updateName = (e) => {
        setName(e.target.value);
    };

    const addSearch = e => {
        e.preventDefault();
        setSearchs(prevItems => [])
        items.map(element => {
            if (element.name === name) {
                setSearchs(prevItems => [...prevItems, { name: element.name, price: element.price, id: element.length }])
            }
        })

        // items.array.forEach(element => {
        //     if (element.name === name) {
        //         setSearchs(prevItems => [...prevItems, { name: name, price: price, id: prevItems.length }])
        //     }
        // });
        // setSearchs(prevItems => [...prevItems, { name: name, price: price, id: prevItems.length }])
    };

    return (
        <div>
            <p>Search Item: </p>
            <form onSubmit={addSearch}>
                <input type="text" name="name" value={name} onChange={updateName} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddItem