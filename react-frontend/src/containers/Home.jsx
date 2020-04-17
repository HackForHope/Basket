import React, {Component} from 'react';
import styled from 'styled-components';
import Entry from '../components/Entry'
import CompleteMap from '../components/GoogleMapReact'
import {Link} from 'react-router-dom'
import * as orderData from "../data/order.json";

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
    width: 65vw;
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

const businesses = orderData.businesses;
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            isRequest: true,
            registeredHelper: false,// actually need to look at account info first
            activeID: -1,
        }
        this.handleToggle = this.handleToggle.bind(this);
        // this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);

    }

    handleToggle(isRequest){
        if (isRequest != this.state.isRequest){
            this.setState({
                isRequest: isRequest
            })
        }

    }
/*TODO Notworking yet */
    // handleMouseEnter(orderHovered){
    //     this.setState({activeID: orderHovered});
    //     console.log("here");
    // }

    // handleMouseLeave(orderHovered){
    //     console.log("Haha" + {orderHovered.id});
    // }

    handleOnClick(orderHovered){
        console.log(orderHovered.id);
    }
    
    render(){
        return(
            <Container>
                <LeftCol>
                    <Toggles>
                        <Toggle checked = {this.state.isRequest} onClick = {() => this.handleToggle(true)}>Requests</Toggle>
                        <Toggle checked = {!this.state.isRequest} onClick = {() => this.handleToggle(false)}>Helpers</Toggle>
                    </Toggles>
                    <List>{this.state.isRequest ? orderData.businesses.map((order) => {
                        //onMouseEnter={(order) => this.handleMouseEnter(order)} onMouseLevae={()=> this.handleMouseLeave(order)}
                                                return (
                                                    <div onClick={() => this.handleOnClick(order)}>
                                                        <Entry id={order.id} title = {order.name}
                                                                text1 = {order.rating}
                                                                text2 = {order.location.display_address}>
                                                        </Entry>
                                                    </div>
                                                    )
                                                }): 
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
                    <CompleteMap />
                </RightCol>
            </Container>
        )
    }
}

// {this.state.isRequest ? () : 