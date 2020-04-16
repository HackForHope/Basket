import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SimpleMap from "./GoogleMapReact"
import MainMapPage from "/web/flux/components/examples/x_main/main_map_page"
ReactDOM.render(
   <div style={{width: '90%', height: '400px'}}>
    <MainMapOa/>
  </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
