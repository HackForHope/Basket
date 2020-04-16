import React, {Component} from 'react';
import styled from 'styled-components';
import Entry from '../components/Entry'

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
    background: green;
`

const Toggles = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 1rem;
    background: red;
`

const List = styled.div`
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    scroll-behavior: smooth;
`

const Button = styled.div`
    height: 100px;
    width: 100%;
    background: blue;
`

const Toggle = styled.div`
    width: 50%;
    height: 100%;
    background: ${props => props.checked ? "green" : "white"};
    border: solid black 0.5rem;
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

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            isRequest: true
        }
    }

    render(){   
        return(
            <Container>
                <LeftCol>
                    <Toggles>
                        <Toggle checked = {this.state.isRequest} onClick = {() => this.setState({isRequest: true})}>Requests</Toggle>
                        <Toggle checked = {!this.state.isRequest} onClick = {() => this.setState({isRequest: false})}>Helpers</Toggle>
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
                    <Button></Button>
                </LeftCol>
                <RightCol>
                    {/* the map goes here */}
                </RightCol>
            </Container>
        )
    }
}

