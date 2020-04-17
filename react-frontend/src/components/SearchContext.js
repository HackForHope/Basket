import React, { useState, createContext } from 'react';

export const SearchContext = createContext();

export const SearchProvider = props => {
    const [Searchs, setSearchs] = useState([

    ]);
    return (
        <SearchContext.Provider value={[Searchs, setSearchs]}>
            {props.children}
        </SearchContext.Provider>
    );
}

