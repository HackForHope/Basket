import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: solid black 0.2rem;
    width: 100%;
    height: 20rem;
    overflow-y: scroll;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
`

const Address = styled.div`
    margin: 0.8rem 0;
    padding: 0.5rem 2rem;
    width: 100%;
    background: white;
    text-align: center;
    font-size: 20px;
    line-height: 30px;
`
export default class Addresses extends Component {
    render(){
        return (
            <Container>
                {this.props.addresses.map((addr) => {
                    return(
                        <Address>{addr}</Address>
                    )
                })}
            </Container>
        )
    }
}