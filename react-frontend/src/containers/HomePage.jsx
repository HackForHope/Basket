import React, {Component} from 'react';
import styled from 'styled-components';
import Entry from '../components/Entry'
import {Link} from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`

const LeftCol = styled.div`
    width: 35vw;
    height: 100%;
    padding: 1.5rem;
    background: lightGray;
    display: flex;
    flex-direction: column;
`

const RightCol = styled.div`
    height: 100%;
    background: lightBlue;
    width: 100%;
`

const Toggles = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
`

const List = styled.div`
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    scroll-behavior: smooth;
`

const PostRequestButton = styled(Link)`
    height: 100px;
    margin-top: 1rem;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: white;
`

const Toggle = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.checked ? "green" : "white"};
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: solid black 0.5rem;
`

const RegisterButton = styled.div`
    margin-top: 1rem;
    height: 100px;
    background: ${props => props.checked ? "green" : "white"};
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const reqDummyData = [
    {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }
]

const helperDummyData = [
    {
        tag1: "hey",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hey",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }, {
        tag1: "hi",
        tag2: "this is",
        tag3: "dummy data!"
    }
]

export default class HomePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            isRequest: true,
            registeredHelper: false // actually need to look at account info first
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(isRequest){
        if (isRequest != this.state.isRequest){
            this.setState({
                isRequest: isRequest
            })
        }
    }
    render(){   
        return(
            <Container>
                <LeftCol>
                    <Toggles>
                        <Toggle checked = {this.state.isRequest} onClick = {() => this.handleToggle(true)}>Requests</Toggle>
                        <Toggle checked = {!this.state.isRequest} onClick = {() => this.handleToggle(false)}>Helpers</Toggle>
                    </Toggles>
                    <List>{this.state.isRequest ? reqDummyData.map((dummy) => {
                                                return (<Entry title = {dummy.tag1}
                                                            text1 = {dummy.tag2}
                                                            text2 = {dummy.tag3}>
                                                        </Entry>)}) : 
                                            helperDummyData.map((dummy) => {
                                                return (<Entry title = {dummy.tag1}
                                                               text1 = {dummy.tag2}
                                                               text2 = {dummy.tag3}>
                                                        </Entry>)})}
                    </List>
                    {this.state.isRequest ? (<PostRequestButton to='/shop'>Post a request</PostRequestButton>) : 
                                            (<RegisterButton
                                                onClick = {() => this.setState({registeredHelper: !this.state.registeredHelper})} 
                                                checked = {this.state.registeredHelper}>
                                                    {this.state.registeredHelper ? "I'm not available anymore" :
                                                                                "Register as helper!"}
                                            </RegisterButton>)}
                </LeftCol>
                <RightCol>
                    {/* the map goes here */}
                </RightCol>
            </Container>
        )
    }
}
