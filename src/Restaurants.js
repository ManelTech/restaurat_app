import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import restaurants from'./App.js';
class RestaurantsList extends Component{
  render(){
console.log(this.props.restaurants);

    return(
      <ul>
          { this.props.restaurants.map(restaurant => <li>{restaurant.name} {restaurant.rating}</li> )}
        </ul>
    )
  }
}
export default RestaurantsList;
