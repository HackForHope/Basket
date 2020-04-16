import React, {Component} from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 60px;
    width: 100vw;
    background: yellow;
    display: flex;
    flex-direction: row;
    z-index: 5;
`

export default class NavBar extends Component{
    render(){
        return (
            <Container>
                this is the NavBar
            </Container>
        )
    }
}