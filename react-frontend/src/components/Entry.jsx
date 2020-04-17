import React, {Component} from 'react'
import styled from 'styled-components'

const Title = styled.h2`
`

const Container = styled.div`
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    background: white;
    height: 10rem;
    overflow-y: scroll;
    scroll-behavior: smooth;
    border: solid black 0.5rem;
    line-height: 15px;
`

const Text = styled.p`
    color: deepGray;
`

export default class Entry extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Container>
                <Title>{this.props.title}</Title>
                <Text>{this.props.text1}</Text>
                <Text>{this.props.text2}</Text>
            </Container>
        )
    }
}