import React, { PureComponent } from "react";
import ReactMapGL,{ Marker } from "react-map-gl";
import axios from "axios";
import { PropTypes } from 'react';


class Map extends PureComponent {
handleViewportChange= () => {
  this.props.viewportChange(this.props.viewport)
}

 render() {
 console.log(this.props.userLocation)
  const {viewport} = this.props.state;
  const data = this.props.restaurants;
   return (
     <ReactMapGL {...viewport}
     width="1000px"
     height="600px"
       mapboxApiAccessToken={'pk.eyJ1IjoibWFudWVsbGE5NCIsImEiOiJjazRlc3Y5eHowNjFmM25xd3kxNHF5dGRwIn0.MF6RC_cojTTpx9OSgud_Og'}
       onViewportChange={this.handleViewportChange}
       >
       <Marker
   latitude={this.props.userLocation.latitude}
   longitude={this.props.userLocation.longitude}
  >
   <img className="location-icon" src="user-location.png" alt="You"/>
  </Marker>
    {
      this.props.restaurants.filter(restaurant => this.props.filterValue[0]<= restaurant.rating && restaurant.rating <= this.props.filterValue[1]).map(
      restaurant => <Marker  longitude={restaurant.coordinates.longitude} latitude={restaurant.coordinates.latitude} ><img src="restaurants.png" alt="Restaurant" /> </Marker>
    )

    }
     </ReactMapGL>
   );
 }
}
export default Map;
