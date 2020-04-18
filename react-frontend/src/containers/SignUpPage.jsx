import React, {Component, useEffect, useState, setState} from 'react';
import styled from 'styled-components';
import './SignUpPage.css';
import {Redirect} from 'react-router-dom';
 
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #DDD;
  font-size: 16px;
  color: #222;
  font-family: Monserrat;
  font-weight: 300;
  background-image: url('https://i.ibb.co/j4pfVsV/image.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed; 
  background-size: cover;
`

export default class SignUpPage extends Component{
    // const [movies, setMovies] = useState([]);
    // useEffect(() => {
    //   fetch('/movies').json().then(data => {
    //     setMovies(data);
    //     console.log("data")
    //   });
    // }, []);
    constructor(props){
      super(props)
      this.state = { submit : false }
      this.handleClick = this.handleClick.bind(this);
 
    }
    async handleClick(e){
      const user = ["julie", "123", "password"];
      this.setState(state => ({submit : true}));
      const response = await fetch("/register", {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      if (response.ok){
        console.log("OK :)");
      }
    }

    render(){
    if (this.state.submit === true) {
      return (<Redirect from='/signup' to="/home" />);
    }
    return (
      <Container>
        <link rel="stylesheet" type="text/css" href="SignUpPage.css" />
        <div id="login-box">
          <div className="left">
            <h1>Sign Up</h1>
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="password2" placeholder="Retype password" />
            <input type="submit" onClick={this.handleClick} name="signup_submit" defaultValue="Sign me up" />
          </div>
          <div className="right">
            <span className="loginwith">Sign In with<br />Social Network</span>
            <button className="social-signin facebook">Log in with Facebook</button>
            <button className="social-signin twitter">Log in with Twitter</button>
            <button className="social-signin google">Log in with Google+</button>
          </div>
          <div className="or">OR</div>
        </div>
      </Container>
      
    );
    } 
}