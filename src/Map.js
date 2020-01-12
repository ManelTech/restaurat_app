import React, { PureComponent } from "react";
import ReactMapGL,{ Marker } from "react-map-gl";
import axios from "axios";
import { PropTypes } from 'react'
class Map extends PureComponent {


 render() {
   console.log('this.state', this.state);
  const {viewport} = this.props.viewport;
  const data = this.props.restaurants;
  console.log("restauratnsmap", this.props.restaurants);
   return (
  >
   );
 }
}
export default Map;
