import React, {Component} from 'react';
import styled from 'styled-components';
import RequestsPageEntry from '../components/RequestsPageEntry'

const dummyData = [{
    id: 1,
    timestamp: "hahahahahahahhaha",
    stage: 2,
    items: ['apple', 'banana', 'dried pepper', 'scallion', 'cheese balls'],
    helper: "xiaowang"
}, {
    id: 2,
    timestamp: "hahahahahahahhaha",
    stage: 0,
    items: ['apple', 'banana', 'dried pepper', 'scallion', 'cheese balls'],
    helper: "xiaowang"
}, {
    id: 3,
    timestamp: "hahahahahahahhaha",
    stage: 1,
    items: ['apple', 'banana', 'dried pepper', 'scallion', 'cheese balls'],
    helper: "xiaowang"
}, {
    id: 4,
    timestamp: "hahahahahahahhaha",
    stage: 2,
    items: ['apple', 'banana', 'dried pepper', 'scallion', 'cheese balls'],
    helper: "xiaowang"
}]

const Container = styled.div`
    height: 100%,
    width: 100%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    margin: 2rem 0rem;
    font-size: 48px;
    font-weight: 900;
    font-family: Monserrat;
    color: deepGray;
`

const MyRequests = styled.div`
    height: 40rem;
    width: 100%;
    border: solid black 0.5rem;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding: 2rem;
    background: lightYellow;
`

export default class RequestsPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            myRequests: [],
            selected: null,
        }
        this.select = this.select.bind(this)
        this.deSelect = this.deSelect.bind(this)
    }

    componentDidMount(){
        {/* function to populate myRequests */}
        this.setState({
            myRequests: dummyData
        })
    }

    select(i){
        this.setState({
            selected: i 
        })
    }

    deSelect(i){
        this.setState({
            selected: null
        })
    }

    render(){
        return(
            <Container>
                <Title>My Requests</Title>    
                <MyRequests>
                    {this.state.myRequests.map((req) => {
                        if (this.state.selected === req.id){
                            return (<RequestsPageEntry expanded={true} onClick = {this.deSelect} req = {req} />)
                        }
                        return (<RequestsPageEntry expanded={false} onClick = {this.select} req = {req} />)
                    })}
                </MyRequests>        
            </Container>
        )
    }
}