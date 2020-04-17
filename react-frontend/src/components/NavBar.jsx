import React, {Component} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Sidebar from 'react-sidebar'

const Container = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;
    z-index: 5;
`

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background: yellow;
`

const Icon = styled(Link)`
    margin: 0.5rem;
    position: fixed;
    height: 40px;
    width: 40px;
    top: 0;
    background: white;
    border: solid black 0.2rem;
    text-decoration: none;
`

const ProfileIcon = styled(Icon)`
    right: 0;  
`

const HomeIcon = styled(Icon)`
    left: 0;
`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 20rem;
    z-index: 5;
`

const SpaceAboveMenu = styled.div`
    width: 100%;
    height: 60px;
`

const MenuButton = styled(Link)`
    width: 100%;
    height: 6rem;
    padding: 2rem 0;
    display: flex;
    color: black;
    font-size: 32px;
    font-weight: semi-bold;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: white;
    border: solid black 0.2rem;
    text-decoration: none;
    z-index: 5;
`

export default class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            sidebarOpen: false
        }

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    }

    onSetSidebarOpen(){
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    }

    render(){
        return (
            <Container>
                <Header />
                <HomeIcon to = '/home' />
                <Sidebar
                    sidebar = {<b><SpaceAboveMenu />
                                  <Menu>
                                    <MenuButton to = '/profile/account'>Account Information</MenuButton>
                                    <MenuButton to = '/profile/requests'>My Requests</MenuButton>
                                    <MenuButton to = '/profile/missions'>My Missions</MenuButton>
                                  </Menu></b>}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    pullRight={true}
                >
                    <ProfileIcon onClick = {() => this.onSetSidebarOpen()} />
                </Sidebar>
            </Container>
        )
    }
}