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

export default class CheckoutPage extends Component {

    constructor(props) {
        super(props)
    }
    render() {

        return (
            <SearchProvider> <ItemProvider> <CartProvider>

                <Nav />
                <div className="myApp">

                    {/* <form className="shop-search-form">
                        <input className="shop-search-bar" type="text" />
                        <button className="shop-search-button" type="submit" >
                            Search
                        </button>
                    </form> */}

                    <AddItem />
                    <SearchButton className="Button" />
                    <p>Search Result</p>
                    <SearchList className='multiBlock' />

                    <p>All available Items</p>
                    <ItemList className='multiBlock' />

                    <p>Shopping Cart:</p>
                    <CartItemList className='multiBlock' />

                    <button className="Button" onClick={() => this.onClickSidebar()} to='/profile/checkout'>Check Out</button>
                </div>
            </CartProvider> </ItemProvider> </SearchProvider>
        );
    }
}
