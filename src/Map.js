import React, { PureComponent } from "react";
import ReactMapGL,{ Marker } from "react-map-gl";
import axios from "axios";
import { PropTypes } from 'react';
import Markers from './Markers.js';


class Map extends PureComponent {
handleViewportChange= (viewport) => {
  this.props.viewportChange(viewport)
}

 render() {

  const viewport = this.props.viewport;
  const data = this.props.restaurants;
   return (
     <ReactMapGL {...viewport}
     width="1000px"
     height="600px"
       mapboxApiAccessToken={'pk.eyJ1IjoibWFudWVsbGE5NCIsImEiOiJjazRlc3Y5eHowNjFmM25xd3kxNHF5dGRwIn0.MF6RC_cojTTpx9OSgud_Og'}
       onViewportChange= {this.handleViewportChange(viewport)}
       >
       <Marker
   latitude={this.props.userLocation.latitude}
   longitude={this.props.userLocation.longitude}
  >
   <img className="location-icon" src="user-location.png" alt="You"/>
  </Marker>
  < Markers restaurants={this.props.restaurants} filterValue={this.props.filterValue}/>
     </ReactMapGL>
   );
 }
}
export default Map;
