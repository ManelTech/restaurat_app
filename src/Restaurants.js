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
      <div>
      <div>
      <form>
      <h5> Filter by Rating: </h5>
    <select >
      <option disabled defaultValue>Ehne mehne Muh</option>
      <option value="1">Test</option>
      <option value="2">Test 2</option>
    </select>
    </form>
  </div>
     <div id="restaurants_reviews">
      <div id="restaurants">
          { this.props.restaurants.map(restaurant =>  <li><img src={restaurant.image_url} className="restaurant_image"/> {restaurant.name} <br/> Rating: {restaurant.rating} <br/> <a href="#reviews" onClick= {() => this.showReviews(restaurant.id)}> See Reviews </a> <br/></li> )}
        </div>
        <div id="reviews">
        <a href="#add_review" onClick={() => this.addReview}> Add a Review </a>
           {
             this.state.reviews.map(review => <li> <img src={review.user.image_url} id="user_img"/>{review.user.name} <br/>
             {review.time_created}<br/> {review.text} <br/> <a href={review.url}> Read more </a> </li>
             )

           }

          </div>
         </div>
         </div>





    )
  }
}
export default RestaurantsList;
