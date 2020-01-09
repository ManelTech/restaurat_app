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
    this.handler = this.handler.bind(this);
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
  }
handler(viewport){
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
      const restaurants = res.data.businesses;
      this.setState({restaurants});
    })
    console.log(this.state);
    })
    console.log(this.state.userLocation)
 }
 render(){
  return (
    <div className="App">
     <div className="main">
       <div className="map">
       <Map viewport = {this.state.viewport} userLocation = {this.state.userLocation} state = {this.state}   restaurants= {this.state.restaurants} update= {this.handler} />
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
