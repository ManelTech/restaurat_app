import React, { PureComponent } from "react";
import ReactMapGL,{ Marker } from "react-map-gl";
import axios from "axios";
import { PropTypes } from 'react'
//import Markers from "./Markers.js";
class Map extends PureComponent {
 state = this.props.viewport;

 render() {
   console.log('this.state', this.state);
  const {viewport} = this.state;
  const data = this.props.restaurants;
  console.log("restauratnsmap", this.props.restaurants);
   return (
     <ReactMapGL {...viewport}
       width="800px"
       height="600px"
       mapboxApiAccessToken={'pk.eyJ1IjoibWFudWVsbGE5NCIsImEiOiJjazRlc3Y5eHowNjFmM25xd3kxNHF5dGRwIn0.MF6RC_cojTTpx9OSgud_Og'}
       onViewportChange= {this.props.update(viewport)}
        // {viewport => this.setState({viewport})}
       >
       <Marker
   latitude={this.props.userLocation.latitude}
   longitude={this.props.userLocation.longitude}
 >
   <img className="location-icon" src="user-location.png"/>
 </Marker>

     </ReactMapGL>
   );
 }
}
export default Map;
