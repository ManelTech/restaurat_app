import React, { PureComponent } from "react";
import ReactMapGL,{ Marker } from "react-map-gl";
import axios from "axios";

class Markers extends PureComponent {
  render() {

    const data = this.props.restaurants;
    return this.props.restaurants.map(
      restaurant => <Marker  longitude={restaurant.coordinates.longitude} latitude={restaurant.coordinates.latitude} ><img src="restaurants.png" /> </Marker>
    )
  }

}
export default Markers;
