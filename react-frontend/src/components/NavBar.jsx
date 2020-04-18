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
    background: #FFFFEE;
    z-index: 5;
`

const Icon = styled(Link)`
    margin: 0.5rem;
    position: fixed;
    height: 40px;
    width: 40px;
    top: 0;
    border-radius: 10px;
    text-decoration: none;
    z-index: 5;
`

const ProfileIcon = styled(Icon)`
    right: 0;
    background-color: #FDD465;
`

const HomeIcon = styled(Icon)`
    left: 0;
    background-image: url("https://i.ibb.co/7zfJGpT/2020-04-17-6-20-19.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 6;
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

//AccountInfo,MyRequest,MyMission
const MenuButton = styled(Link)`
    width: 100%;
    height: 6rem;
    padding: 2rem 0;
    display: flex;
    color: black;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    text-align: right;
    background: #FFFFEE;
    border: #C4C4C4 0.1rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    z-index: 10;
    border-radius: 2px;

    &:hover {
        background: lightGray;
    }
`

export default class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            sidebarOpen: false
        }

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
        this.onClickSidebar = this.onClickSidebar.bind(this)
    }

    onSetSidebarOpen(){
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    }

    onClickSidebar() {
        this.setState({
            sidebarOpen: false
        })
    }

    render(){
        return (
            <Container>
                <Header />
                <HomeIcon to = '/home'></HomeIcon>
                <Sidebar
                    sidebar = {<b><SpaceAboveMenu />
                                  <Menu>
                                    <MenuButton onClick = {() => this.onClickSidebar() } to = '/profile/account'>Account Information</MenuButton>
                                    <MenuButton onClick = {() => this.onClickSidebar() } to = '/profile/requests'>My Requests</MenuButton>
                                    <MenuButton onClick = {() => this.onClickSidebar() } to = '/profile/missions'>My Missions</MenuButton>
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
