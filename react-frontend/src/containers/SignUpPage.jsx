import React, {Component} from 'react';
import './SignUpPage.css';

export default class SignUpPage extends Component{
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="SignUpPage.css" />
        <style dangerouslySetInnerHTML={{__html: "\n\n  body {\n  background-image: url('https://i.ibb.co/j4pfVsV/image.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed; \n  background-size: cover;\n  }\n\n" }} />
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
      </div>
    );
  }
}