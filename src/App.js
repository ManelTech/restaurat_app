import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import Restaurants from './Restaurants.js';
import axios from 'axios';
import Header from './Header.js';

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
        latitude: 0,
        longitude: 0
      },
      filterValue: "05"
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
      const restaurantslist = res.data.businesses;
      this.setState({restaurants: restaurantslist});
    })
    })
 }
 _viewportChange= (viewport) => {
   this.setState({viewport: viewport});
 }
 togglePop = () => {
    this.setState({popup: !this.state.popup});
  };
  addRestaurant= (newRestaurant) => {
    const restaurantslist = this.state.restaurants;
    this.setState({restaurants: [...restaurantslist, newRestaurant]});
  }
handleFilter= (filterValue) => {
  this.setState({filterValue: filterValue});
}
  render(){
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <div className="map">
            <Map viewport={this.state.viewport} restaurants={this.state.restaurants}
            userLocation={this.state.userLocation} filterValue={this.state.filterValue}
            viewportChange={this._viewportChange} handleFilter={this.handleFilter} addRestaurant={this.addRestaurant}/>
          </div>
          <div className="restaurants"  >
            <Restaurants restaurants= {this.state.restaurants} handleFilter={this.handleFilter} filterValue={this.state.filterValue} />
          </div>
        </div>
      </div>
     )
    }
   }
export default App;
