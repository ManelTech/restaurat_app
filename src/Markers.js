import React, { PureComponent } from "react";
import ReactMapGL,{ Marker } from "react-map-gl";
import axios from "axios";

class Markers extends PureComponent {
  render() {

    const {data} = this.props;
    return data.map(
      restaurant => <Marker  longitude={restaurant.longitude} latitude={restaurant.latitude} ><img src="restaurants.png" /> </Marker>
    )
  }

}
export default Markers;
