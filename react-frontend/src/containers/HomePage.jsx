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
    width: 30vw;
    height: 100%;
    padding: 1.5rem;
    background: #61D4B3;
    display: flex;
    flex-direction: column;
`

const RightCol = styled.div`
    height: 100%;
    background: lightBlue;
    width: 65vw;
`

const Toggles = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 rem 0;
`

const List = styled.div`
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    scroll-behavior: smooth;
`

const PostRequestButton = styled(Link)`
    height: 300px;
    margin-top: 1rem;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: #FDD465;
    border-radius: 5px;
    font-family: Montserrat;
    color: #000000;
    font-size: 20px;
`

const Toggle = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    width: 100%;
    height: 100%;
    background: ${props => props.checked ? "#FFD31D" : "#FFFFEE"};
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: #E5E5E5 0.1rem;
    border-radius: 5px;
`

const RegisterButton = styled.div`
    height: 120px;
    margin-top: 1rem;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 5px;
    font-family: Montserrat;
    font-size: 20px;
    background: ${props => props.checked ? "#FFD31D" : "#FFFFEE"};
`


const helperData = [
    {
        tag1: "Fiona",
        tag2: "@FionaZhang888",
        tag3: "34.052235, -118.243683"
    }, {
        tag1: "Julie!",
        tag2: "@JulieShi666",
        tag3: "34.028294, -118.27521",
    }, {
        tag1: "Elaine",
        tag2: "@Wangyuan233",
        tag3: "34.01697, -118.288765"
    }, {
        tag1: "Marie",
        tag2: "@Mariee",
        tag3: "34.03447, -118.28341!"
    }, {
        tag1: "Cici",
        tag2: "@Ciciiii",
        longitude: "34.01621, -118.28738!"
    }, {
        tag1: "Ricardo",
        tag2: "@Ricardo222",
        tag3: "34.0474, -118.299644"
    }
]

const businesses = orderData.businesses;
export default class HomePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            isRequest: true,
            registeredHelper: false,// actually need to look at account info first
            activeID: -1,
            activeRequests : [],
            activeHelpers : []
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


    handleOnClick(orderHovered){
        console.log(orderHovered.id);
    }
    
    componentDidMount(){
        fetch("/active-request")
            .then(response => response.json()).
            then(data => {
                // this.setState({activeRequests : data})
                console.log(data.array);
            });
        fetch("/active-helper").then(response =>
            response.json()).then(data => {
                // this.setState({activeHelpers : data})
            });
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
                                            helperData.map((dummy) => {
                                                return (
                                                    <div onClick={() => this.handleOnClick(dummy)}><Entry title = {dummy.tag1}
                                                               text1 = {dummy.tag2}
                                                               text2 = {dummy.tag3}>
                                                        </Entry>
                                                    </div>)})
                                                }
                    </List>
                    {this.state.isRequest ? (<PostRequestButton to = '/shop'>Post a request</PostRequestButton>) : 
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
