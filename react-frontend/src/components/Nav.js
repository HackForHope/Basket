import React, { useContext } from "react";
import { ItemContext } from './ItemContext'
const Nav = ({ name, price, key }) => {
    const [items, setItems] = useContext(ItemContext);
    return (
        <div className='nav'>
            <p id='nav_left'> Hack 4 Hope</p>
            <p id='nav_right'> List of Items: {items.length}</p>
        </div>
    );
};

export default Nav;