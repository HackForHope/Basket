import React, { Component } from 'react';

import Tweet from '../components/Tweet';
import '../components/App.css';
import Nav from '../components/Nav';
import ItemList from '../components/ItemList';
import AddItem from '../components/AddItem';
import { ItemProvider } from '../components/ItemContext'

export default class ShopPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ItemProvider>
                <Nav />
                <div className="myApp">
                    <AddItem />
                    <ItemList className='multiBlock' />
                </div>
            </ItemProvider>
        )
    }
}
