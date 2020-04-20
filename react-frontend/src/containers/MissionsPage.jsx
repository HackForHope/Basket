import React, {Component} from 'react';
import styled from 'styled-components';
import MissionsPageEntry from '../components/MissionsPageEntry'

const dummyData = [{
    id: 1,
    timestamp: "2020-03-20",
    stage: 2,
    items: ['apple', 'banana', 'dried pepper', 'scallion', 'cheese balls']
}, {
    id: 2,
    timestamp: "2020-03-20",
    stage: 0,
    items: ['apple', 'banana', 'dried pepper', 'scallion', 'cheese balls']
}, {
    id: 3,
    timestamp: "2020-03-20",
    stage: 1,
    items: ['apple', 'banana', 'dried pepper', 'scallion', 'cheese balls']
}, {
    id: 4,
    timestamp: "2020-03-20",
    stage: 2,
    items: ['apple', 'banana', 'dried pepper', 'scallion', 'cheese balls']
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

const MyMissions = styled.div`
    height: 40rem;
    width: 100%;
    border: solid black 0.5rem;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding: 2rem;
    background: lightYellow;
`

export default class MissionsPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            myMissions: [],
            selected: null,
        }
        this.select = this.select.bind(this)
        this.deSelect = this.deSelect.bind(this)
    }

    componentDidMount(){
        {/* function to populate myMissions */}
        this.setState({
            myMissions: dummyData
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
                <Title>My Missions</Title>    
                <MyMissions>
                    {this.state.myMissions.map((mis) => {
                        if (this.state.selected === mis.id){
                            return (<MissionsPageEntry expanded={true} onClick = {this.deSelect} mis = {mis} />)
                        }
                        return (<MissionsPageEntry expanded={false} onClick = {this.select} mis = {mis} />)
                    })}
                </MyMissions>        
            </Container>
        )
    }
}