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

const dummyAddr = ["dummyaddr!!!!!!", "dummyaddr!!!!!!", "dummyaddr!!!!!!", "dummyaddr!!!!!!", "dummyaddr!!!!!!", "dummyaddr!!!!!!", "dummyaddr!!!!!!", "dummyaddr!!!!!!", "dummyaddr!!!!!!"]

export default class AccountPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Container>
                <Col1>
                    <Title>xxx's profile page</Title>
                    <Email>xxxx@gmal.com</Email>
                    <Contact>0101010101</Contact>
                    <Addresses addresses = {dummyAddr}/>
                </Col1>
                <Col2>
                    <ProfilePic img = "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></ProfilePic>
                    <Bio>blahblahblahblahbl, ahblahblahblahblahblahblahblah. blahblahblahblahblahblah. blahblahblahblahblahblah! ^_^</Bio>
                </Col2>
            </Container>
        )
    }
}