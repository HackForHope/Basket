import React, {Component} from 'react'
import styled from 'styled-components'

const Title = styled.h2`
`

const Container = styled.div`
    margin: 0.5rem 0;
    padding: 1rem 2rem;
    background: white;
    height: 7rem;
    border: solid black 0.5rem;
`

export default class Entry extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Container>
                <Title>{this.props.title}</Title>
                <p>{this.props.text1}</p>
                <p>{this.props.text2}</p>
            </Container>
        )
    }
}