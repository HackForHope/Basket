import React, { useState, useContext } from "react";
import Item from './Item';
import { SearchContext } from './SearchContext';


const SearchList = () => {
    const [Searchs, setSearchs] = useContext(SearchContext)
    return (
        <div className="multiBlock">
            {Searchs.map(item => (
                <Item name={item.name} price={item.price} key={item.id} />
            ))}
        </div>
    );
}

export default SearchList;