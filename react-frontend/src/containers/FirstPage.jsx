import React, {Component} from 'react';
import './FirstPage.css';
import {Link} from 'react-router-dom';

export default class FirstPage extends Component{
  render() {
    console.log("asdf");
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="FirstPage.css" />
        <style dangerouslySetInnerHTML={{__html: "\n\n  body {\n  background-image: url('https://i.ibb.co/j4pfVsV/image.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed; \n  background-size: cover;\n  }\n\n" }} />
        <h2 class = "first-page-h2">Isolate Virus</h2>
        <h3>Don't Isolate Love</h3>
        <Link className="button" style={{verticalAlign: 'middle'}} to = '/signup' >
          <span>Join Us Now </span>
        </Link>
        <p class = "first-page-p">Help your neighbors and get help form Busket!<br />We want to create a community filled with love and caring during global pandemic.<br />Keep social distancing but not heart distancing through Basket.<br />Let's spread love and beat COVID-19 together!</p>
      </div>
    );
  }
}