import React, { useState, Component } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import * as orderData from "../data/order.json";



// function Map() {
//   const iconUrl = "http://maps.google.com/mapfiles/ms/icons/red.png";

//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 34.02116, lng: -118.287132}}
//     >
//       {orderData.businesses.map((order) => (
//         <Marker key={order.id} 
//         position={{lat: order.coordinates.latitude, lng: order.coordinates.longitude}}
//         // onClick={() =>{
//         //   iconUrl = "http://maps.google.com/mapfiles/ms/icons/red.png";
//         // }}
//         icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"}
//         />
//       ))};
//     </GoogleMap>
//   );
// }
export class Map extends Component {
  constructor(props){
      super(props);
      this.state = {isHovered: true}; //this.props.isHovered;
  };
  
  render(){
    const redUrl = "http://maps.google.com/mapfiles/ms/icons/red.png";
    const blueUrl = "http://maps.google.com/mapfiles/ms/icons/blue.png";
  
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 34.02116, lng: -118.287132}}
      >
        {orderData.businesses.map((order) => {
          return(
          <Marker key={order.id} 
          position={{lat: order.coordinates.latitude, lng: order.coordinates.longitude}}
          
          icon={this.state.isHovered ? redUrl : blueUrl}
          />)
        }
        )};
      </GoogleMap>
    );
  }
  }


// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXPrmkjAfz6u3Asz_X4JivUsOhQ56y2_8&callback=initMap">

export default class CompleteMap extends Component{
  render(){ 
  const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
      <div style={{width: '65vw', height: '100vh'}}>
          <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,palces&key=AIzaSyAXPrmkjAfz6u3Asz_X4JivUsOhQ56y2_8`} 
          loadingElement = {<div style={{ height: "100%"}}/>}
          containerElement = {<div style={{ height: "100%"}}/>}
          mapElement = {<div style={{ height: "100%"}}/>}
          />

      </div>
      );
  };
}