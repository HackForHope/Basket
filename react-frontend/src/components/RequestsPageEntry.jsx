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

const BarContainer = styled.div`
    width: 15rem;
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
`

const Bar = styled.div`
    width: 100%;
    height: 50px;
    margin: 0.5rem 0;
    background: ${props => props.colored ? props.color : "lightGray"};
    border: ${props => props.bordered ? "solid black 0.2rem" : "none"};
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LeftCol = styled.div`
    height: 100%;
    display: flex;
    margin: 0 1rem;
    flex-direction: column;
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

const stages = ["looking for helpers", "taken by helper", "helper on the way", "safely delivered!"]
const colors = ["lightYellow", "yellow", "orange", "red"] 
class ProgressBar extends Component {
    render(){
        return(
            <BarContainer>
                {stages.map((stage, i) => {
                    return (<Bar colored={this.props.stage >= i}
                                 color={colors[i]}
                                 bordered={this.props.stage == i}>
                                     {stage}
                            </Bar>)
                })}
            </BarContainer>
        )
    }
}

export default class RequestsPageEntry extends Component {
    render(){
        const onClick = this.props.onClick;
        if (!this.props.expanded){
            return (
                <Container expanded={this.props.expanded} onClick={() => onClick(this.props.req.id)}>
                    <LeftCol>
                        <Title>Order id: {this.props.req.id}</Title>
                        <div>Order date: {this.props.req.timestamp}</div>
                    </LeftCol>
                </Container>
            )
        } else {
            return (
                <Container expanded={this.props.expanded} onClick={() => onClick(this.props.req.id)}>
                    <LeftCol>
                        <Title>Order id: {this.props.req.id}</Title>
                        <div>Order date: {this.props.req.timestamp}</div>
                        <div>Helper: {this.props.req.helper}</div>
                        <ProgressBar stage={this.props.req.stage} />
                    </LeftCol>
                    <RightCol>
                        <Title>Order Summary</Title>
                        <ItemBox>
                            {this.props.req.items.map((item) => {
                                return(<Item>{item}</Item>)
                            })}
                        </ItemBox>
                    </RightCol>
                    
                </Container>
            )
        }
        
    }
}