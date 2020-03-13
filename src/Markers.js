import React, { PureComponent } from "react";
import { Marker } from "react-map-gl";

class Markers extends PureComponent {
  render(){
    return(
      <div className="markers_div" >
        {
          this.props.restaurants.filter(restaurant=>this.props.filterValue[0]<= restaurant.rating&&restaurant.rating<=this.props.filterValue[1]).map(
          restaurant => <Marker key={restaurant.id} longitude={restaurant.coordinates.longitude} latitude={restaurant.coordinates.latitude} ><img src="restaurants.png" alt="Restaurant"onClick={this.props.onClick}/> </Marker>
          )
         }
      </div>
    )
  }
}
export default Markers;
