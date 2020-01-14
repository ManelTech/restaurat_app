import React, { Component } from 'react';
import './App.css';
import ReactMapGL , {Marker } from 'react-map-gl';
import PopUp from './PopUp.js';
import Restaurants from './Restaurants.js';
import axios from 'axios';
import Markers from './Markers.js'

import { PropTypes } from 'react'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      restaurants: [],
      viewport: {
        longitude: -122.45,
        latitude: 37.78,
        zoom: 13
      },
      userLocation: {
        latitude: 48.350,
        longitude: 16
      },
      popup: false
    }
  }

componentDidMount(){
    let getPosition = function() {
      return new Promise( function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      });
    }
    getPosition()
      .then( (position) => {
      this.setState({
        viewport: {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          zoom: 13
        },
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      })

      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?/term=restaurants&radius=500&latitude=${this.state.userLocation.latitude}&longitude= ${this.state.userLocation.longitude}`, {
      headers: {
        Authorization: 'Bearer W6BV1P4sxNrQ3v6Cle7VWvMrf0sJ_SwwsP_lV4TeY8KYZ4OiUbC2GX0ZRGw2KVeRbgNFkmwSO5RtZt747DCUK3nCya67uqife5hu9bekL96ykquG4npUJwHNL6cPXnYx'
    }
    })
    .then(res => {
      const restaurants = res.data.businesses;
      this.setState({restaurants});
    })
    })
 }
 togglePop = () => {
    this.setState({
      popup: !this.state.popup
    });
  };
render(){
  const {viewport} = this.state;
  return (
    <div className="App">
     <div className="main">
       <div className="map" onClick={this.togglePop}>
       <ReactMapGL {...viewport}
         width="800px"
         height="600px"
         mapboxApiAccessToken={'pk.eyJ1IjoibWFudWVsbGE5NCIsImEiOiJjazRlc3Y5eHowNjFmM25xd3kxNHF5dGRwIn0.MF6RC_cojTTpx9OSgud_Og'}
         onViewportChange={viewport => this.setState({viewport})}
         >
         <Marker
     latitude={this.state.userLocation.latitude}
     longitude={this.state.userLocation.longitude}
   >
     <img className="location-icon" src="user-location.png" alt="You"/>
   </Marker>
   <Markers restaurants={this.state.restaurants} />
       </ReactMapGL>
       </div>
       {this.state.popup ? <PopUp toggle={this.togglePop} /> : null}
       <div className="restaurants">
       <Restaurants restaurants= {this.state.restaurants} />
       </div>
     </div>
    </div>
  )
 }
}
export default App;
