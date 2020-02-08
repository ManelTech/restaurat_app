import React, { PureComponent } from "react";
import ReactMapGL,{ Marker } from "react-map-gl";
import axios from "axios";
class Markers extends PureComponent {
  render(){
    return(

        this.props.restaurants.filter(restaurant => this.props.filterValue[0]<= restaurant.rating && restaurant.rating <= this.props.filterValue[1]).map(
        restaurant => <Marker  longitude={restaurant.coordinates.longitude} latitude={restaurant.coordinates.latitude} ><img src="restaurants.png" alt="Restaurant" /> </Marker>
      )


    )
  }
}
export default Markers;
