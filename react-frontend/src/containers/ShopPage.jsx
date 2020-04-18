import React, { useState, useEffect } from 'react';
import Tweet from '../components/Tweet';
import './ShopPage.css';
import Nav from '../components/Nav';
import ItemList from '../components/ItemList';
import AddItem from '../components/AddItem';
import { ItemProvider } from '../components/ItemContext';

import { SearchProvider } from '../components/SearchContext';
import SearchList from '../components/SearchLists';
import SearchButton from '../components/SearchButton';

import { CartProvider } from '../components/CartContext';
import CartItemList from '../components/CartItemList';
import AddCartItem from '../components/AddCartItem';
import { Component } from 'react';

export default class ShopPage extends Component {

    constructor(props) {
        super(props)
    }
    render() {

        return (
            <SearchProvider> <ItemProvider> <CartProvider>

                <Nav />
                <div className="myApp">

<<<<<<< HEAD
=======
                    {/* <form className="shop-search-form">
                        <input className="shop-search-bar" type="text" />
                        <button className="shop-search-button" type="submit" >
                            Search
                        </button>
                    </form> */}

                    {/* <AddItem /> */}
>>>>>>> ba595fc2218a8a356ac2ba5153143b04cb303994
                    <SearchButton />
                    <p>Search Result</p>
                    <SearchList className='multiBlock' />

                    <p>All available Items</p>
                    <ItemList className='multiBlock' />

                    <p>Shopping Cart:</p>
                    <CartItemList className='multiBlock' />
                </div>
            </CartProvider> </ItemProvider> </SearchProvider>
        );
    }
}
