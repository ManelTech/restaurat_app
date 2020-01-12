import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import restaurants from'./App.js';
import axios from 'axios';
class RestaurantsList extends Component{
  state = {
    reviews : []
  }

  showReviews = (a) => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${a}/reviews`, {
    headers: {
      Authorization: 'Bearer W6BV1P4sxNrQ3v6Cle7VWvMrf0sJ_SwwsP_lV4TeY8KYZ4OiUbC2GX0ZRGw2KVeRbgNFkmwSO5RtZt747DCUK3nCya67uqife5hu9bekL96ykquG4npUJwHNL6cPXnYx'
  }
  })
  .then(res => {
    const reviews = res.data.reviews ;
    this.setState({reviews})
  })
  }

  render(){

console.log(this.state);
    return(
      <ul>
          { this.props.restaurants.map(restaurant =>  <li><img src={restaurant.image_url} class="restaurant_image"/>{restaurant.name} <br/> {restaurant.rating} <br/> <a href="#" onClick= {() => this.showReviews(restaurant.id)}> See Reviews </a> </li> )}

           {
             this.state.reviews.map(review => <li> {review.text} </li>)
           }
           
        </ul>



    )
  }
}
export default RestaurantsList;
