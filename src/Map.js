import React, { PureComponent } from "react";
import ReactMapGL,{ Marker } from "react-map-gl";
import axios from "axios";
import { PropTypes } from 'react'

class Map extends PureComponent {

 render() {
   console.log('this.props', this.props)
   return (
     <ReactMapGL viewport={this.props.viewport}
       width="800px"
       height="600px"
       mapboxApiAccessToken={'pk.eyJ1IjoibWFudWVsbGE5NCIsImEiOiJjazRlc3Y5eHowNjFmM25xd3kxNHF5dGRwIn0.MF6RC_cojTTpx9OSgud_Og'}
       onViewportChange= {this.props.viewportChange}
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
