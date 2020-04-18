import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 10px;
    background: ${props => props.expanded ? "white" : "pink"};
    height: ${props => props.expanded ? "25rem" : "7rem"};
    display: flex;
    flex-direction: ${props => props.expanded ? "row" : "column"};
`

const ButtonContainer = styled.div`
    width: 15rem;
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
`

const Button = styled.div`
    width: 100%;
    height: 50px;
    margin: 0.5rem 0;
    background: green;
    border: solid black 0.2rem;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background: ${props => props.complete ? "green" : "lightGreen"};
    }
`

const LeftCol = styled.div`
    height: 100%;
    display: flex;
    margin: 0 1rem;
    flex-direction: column;
    justify-content: center;
`

const RightCol = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    justify-content: center;
`

const Item = styled.div`
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    padding: 0.3rem 0.5rem;
    margin: 0.3rem;
    border: solid black 0.05rem;
`

const ItemBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Title = styled.p`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 1rem;
    padding-bottom: 0;
    font-family: Monserrat;
`

const stages = ["take this mission", "I'm on my way", "Complete mission", "Mission complete!"]
const colors = ["lightYellow", "yellow", "orange", "red"] 

class ButtonBox extends Component {
    constructor(props){
        super(props);
        this.dummyOnClick = this.dummyOnClick.bind(this)
    }

    dummyOnClick(){
        console.log("doing nothing")
    }

    render(){
        return(
            <ButtonContainer>
                <Button complete = {this.props.complete} onClick = {this.props.complete ? this.dummyOnClick : this.props.onClick}>{stages[this.props.stage]}</Button>
            </ButtonContainer>
        )
    }
}

export default class MissionsPageEntry extends Component {
    constructor(props){
        super(props);
        this.state = {
            stage: props.mis.stage
        }
        this.handleStageChange = this.handleStageChange.bind(this);
    }

    handleStageChange(){
        this.setState({
            stage: this.state.stage + 1
        })
    }
    render(){
        const onClick = this.props.onClick;
        if (!this.props.expanded){
            return (
                <Container expanded={this.props.expanded} onClick={() => onClick(this.props.mis.id)}>
                    <LeftCol>
                        <Title>Order id: {this.props.mis.id}</Title>
                        <div>Order date: {this.props.mis.timestamp}</div>
                    </LeftCol>
                </Container>
            )
        } else {
            return (
                <Container expanded={this.props.expanded} onClick={() => onClick(this.props.mis.id)}>
                    <LeftCol>
                        <Title>Order id: {this.props.mis.id}</Title>
                        <div>Order date: {this.props.mis.timestamp}</div>
                        <div>Request owner: {this.props.mis.helper}</div>
                        <ButtonBox complete={this.state.stage === 3} onClick={this.handleStageChange} stage={this.state.stage} />
                    </LeftCol>
                    <RightCol>
                        <Title>Order Summary</Title>
                        <ItemBox>
                            {this.props.mis.items.map((item) => {
                                return(<Item>{item}</Item>)
                            })}
                        </ItemBox>
                    </RightCol>
                    
                </Container>
            )
        }
        
    }
}