import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import './SignUpPage.css';
 
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

export default function SignUpPage(){
    // const [movies, setMovies] = useState([]);
    // useEffect(() => {
    //   fetch('/movies').json().then(data => {
    //     setMovies(data);
    //     console.log("data")
    //   });
    // }, []);
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
            <input type="submit" name="signup_submit" defaultValue="Sign me up" />
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