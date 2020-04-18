import React, {Component} from 'react';
import styled from 'styled-components';
import Addresses from '../components/Addresses';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`

const Col1 = styled.div`
    width: 40vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: lightBlue;
    padding: 2rem 4rem;
`

const Col2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: pink;
    padding: 2rem 4rem;
`

const Title = styled.h1`
`
const Email = styled.p`
`
const Contact = styled.p`
`
const Bio = styled.div`
    width: 30rem;
    padding: 2rem;
    font-size: 18px;
    font-weight: 500;
    font-family: Monserrat;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    line-height: 25px;
`

const ProfilePic = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    height: 20rem;
    width: 20rem;
    border: solid black 0.2rem;
    border-radius: 3rem;
    margin: 2rem;
`

const Input = styled.input`
    height: 8rem;
    width: 15rem;
    padding: 0.8rem;
    border-radius: 10px;
    text-align: center;
    display: flex;
    justify-content: center
    font-size: 25px;
`

export default class AccountPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            addresses: ["70 Morningside Dr, New York, NY", "Morris A Schapiro Hall, 605W 115th St, New York, NY", "Oakdale South, Charlotte, NC", "4352 Tuckageesee Rd, Charlotte, NC", "2794 Broadway, New York, NY 10025"]
        }
        this.addAddress = this.addAddress.bind(this)
    }

    addAddress(event){
        if (event.key === 'Enter'){
            this.setState({
                addresses: [event.target.value, ...this.state.addresses]
            })
        }
    }

    render(){
        return (
            <Container>
                <Col1>
                    <Title>elaineha's profile page</Title>
                    <Email>yw3241@columbia.edu</Email>
                    <Addresses addresses = {this.state.addresses}/>
                    <Input type="text" name="address" placeholder="Add new address" onKeyDown={this.addAddress}></Input>
                </Col1>
                <Col2>
                    <ProfilePic img = "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></ProfilePic>
                    <Bio>Love to help the peeps in the Charlotte neighborhood! Let's all stay at home and fight COVID19. :)</Bio>
                </Col2>
            </Container>
        )
    }
}