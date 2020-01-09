import React, { Component } from 'react';
import './App.css';
import ReactMapGL from 'react-map-gl';
import Map from './Map.js';
import Restaurants from './Restaurants.js';
import axios from 'axios';
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
      }
    }

    // this.handler = this.handler.bind(this);
  }
handler = (viewport) => {
  this.setState({viewport})
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
          // zoom: 13
        },
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      })

      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?/term=restaurants&radius=1000&latitude=${this.state.userLocation.latitude}&longitude= ${this.state.userLocation.longitude}`, {
      headers: {
        Authorization: 'Bearer W6BV1P4sxNrQ3v6Cle7VWvMrf0sJ_SwwsP_lV4TeY8KYZ4OiUbC2GX0ZRGw2KVeRbgNFkmwSO5RtZt747DCUK3nCya67uqife5hu9bekL96ykquG4npUJwHNL6cPXnYx'
    }
    })
    .then(res => {
      console.log('res', res);
      const restaurants = res.data.businesses;
      this.setState({restaurants});
    })
    })
 }

 viewportChange = (viewport) => {
   // console.log('viewport', viewport);
   this.setState({viewport})
 }

 render(){
   console.log('this.state.restaurants', this.state.restaurants);
   console.log('this.state.viewport', this.state.viewport);
  return (
    <div className="App">
     <div className="main">
       <div className="map">
         <Map
           viewport={this.state.viewport}
           viewportChange={this.viewportChange}
           userLocation = {this.state.userLocation}
           restaurants={this.state.restaurants}
         />
       </div>

       <div className="restaurants">
       <Restaurants restaurants= {this.state.restaurants} />
       </div>
     </div>
    </div>
  )
 }
}
export default App;
