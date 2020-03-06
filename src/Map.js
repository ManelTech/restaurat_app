import React, { PureComponent } from "react";
import ReactMapGL,{ Marker } from "react-map-gl";
import Markers from './Markers.js'
import PopUp from './PopUp.js';

class Map extends PureComponent {
  state ={
    popup: false
  }
togglePop = () => {
     this.setState({popup: !this.state.popup});
   };
handleViewportChange= (viewport) => {
  this.props.viewportChange(viewport)
}

 render() {
  const viewport = this.props.viewport;
  return (
    <div className="map_div">
      <div className="popup_div">
        {this.state.popup ? <PopUp toggle={this.togglePop} handleFilter={this.props.handleFilter} addRestaurant={this.props.addRestaurant} /> : null}
      </div>
      <ReactMapGL {...viewport} onClick={this.togglePop}
      width="70vw"
      height="90vh"
      mapboxApiAccessToken={'pk.eyJ1IjoibWFudWVsbGE5NCIsImEiOiJjazRlc3Y5eHowNjFmM25xd3kxNHF5dGRwIn0.MF6RC_cojTTpx9OSgud_Og'}
      onViewportChange= {this.handleViewportChange(viewport)} >
      <Marker latitude={this.props.userLocation.latitude} longitude={this.props.userLocation.longitude}>
       <img className="location-icon" src="user-location.png" alt="You"/>
      </Marker>
      <Markers key={this.props.restaurants} restaurants={this.props.restaurants} filterValue={this.props.filterValue} />
      </ReactMapGL>
    </div>
   );
 }
}
export default Map;
