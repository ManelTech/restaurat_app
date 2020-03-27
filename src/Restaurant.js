import React, { Component }from 'react';
import axios from 'axios';
import PopUpReview from './PopUpReview.js';
import StarRatings from 'react-star-ratings';
import './Restaurant.css';

class Restaurant extends Component{
  state = {
    reviews : [],
    popup: false
  }
  togglePopReview = () => {
     this.setState({
       popup: !this.state.popup
     });
   };
 getReviews = (a) => {
   axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${a}/reviews`, {
   headers: {
     Authorization: 'Bearer W6BV1P4sxNrQ3v6Cle7VWvMrf0sJ_SwwsP_lV4TeY8KYZ4OiUbC2GX0ZRGw2KVeRbgNFkmwSO5RtZt747DCUK3nCya67uqife5hu9bekL96ykquG4npUJwHNL6cPXnYx'
}
})
.then(res => {
  const reviews = res.data.reviews ;
  this.setState({reviews})
})
  this.togglePopReview();
}
 addReview= (newReview) => {
  const reviewslist = this.state.reviews;
  this.setState({reviews: [...reviewslist, newReview]});
}
  render(){
    return (
      <div>
      <div className="restaurant_div" onClick= {() => this.getReviews(this.props.restaurant.id)}>
        <div className="restaurant_content">
          <div className="image_div">
            <img src={this.props.restaurant.image_url} alt="restaurant_img" className="restaurant_image"/>
          </div>
          <div className="restaurant_details">
            <h5>{this.props.restaurant.name} </h5>
            <StarRatings rating={this.props.restaurant.rating} starDimension="20px" starRatedColor="#EBB518"
            starSpacing="5px"/> <br/>
            <a href="#reviews" onClick= {() => this.getReviews(this.props.restaurant.id)}> See Reviews </a> <br/>
          </div>
        </div>
      <div id="reviews" >
          {
            this.state.reviews.map(review => <div key={review.id} className="review_details"> <img src={review.user.image_url} alt="user_img" id="user_img"/>{review.user.name} <br/><StarRatings rating={review.rating} starDimension="20px" starRatedColor="#EBB518"
            starSpacing="5px"/> <br/>{review.time_created}<br/><p className="review_text"> {review.text}</p> <br/> <a href={review.url}> Read more </a> </div>
            )
          }


      </div>
    </div>
    {this.state.popup ? <PopUpReview toggle={this.togglePopReview} addReview={this.addReview} /> : null}
    </div>
   )
 }
}

export default Restaurant;
