import React, { Component } from "react";
import ReactMapGL, {GeolocateControl} from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      longitude: -122.45,
      latitude: 37.78,
      zoom: 14
    }
  }
  componentDidMount() {

  console.log("Component mounted")
 }
  // setUserLocation = () => {
  //             navigator.geolocation.getCurrentPosition(position => {
  //                 let newViewport = {
  //                     height: "100vh",
  //                     width: "100vw",
  //                     latitude: position.coords.latitude,
  //                     longitude: position.coords.longitude,
  //                     zoom: 12
  //                 }
  //                 this.setState({
  //                     viewport: newViewport
  //                 })
  //             })
  //         }
  render() {
    console.log(this.state)
    const {viewport} = this.state;
    return (
      // <div>
      // <button onClick={this.setUserLocation}> Show Restaurants near me </button>
      <ReactMapGL {...viewport}
        width="800px"
        height="600px"
        mapboxApiAccessToken={'pk.eyJ1IjoibWFudWVsbGE5NCIsImEiOiJjazRlc3Y5eHowNjFmM25xd3kxNHF5dGRwIn0.MF6RC_cojTTpx9OSgud_Og'}
        onViewportChange={viewport => this.setState({viewport})}
        >
        <GeolocateControl
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true} />

      </ReactMapGL>
    );
  }
}
export default Map;
