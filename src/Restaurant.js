import React, { Component }from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import PopUpReview from './PopUpReview.js';
class Restaurant extends Component{
  state = {
    reviews : [],
    popup: false
  }
  togglePopReview = () => {
    console.log('toggle')
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
}
addReview= (newReview) => {

  this.state.reviews.push(newReview);
  const reviews = this.state.reviews;
  this.setState({reviews});
}
render(){
 return (
    <div>
   <div className="restaurant_div">
     <div>
      <img src={this.props.restaurant.image_url} className="restaurant_image"/>
      </div>
      <div className="restaurant_details">
       <h5>{this.props.restaurant.name} </h5>
       <p className="rating"> Rating: {this.props.restaurant.rating} </p>
       <a href="#reviews" onClick= {() => this.getReviews(this.props.restaurant.id)}> See Reviews </a> <br/>
       </div>
       </div>


       <div id="reviews" >
         <a href="#add_review" onClick={this.togglePopReview}> Add a Review </a>
              {this.state.popup ? <PopUpReview toggle={this.togglePopReview} addReview={this.addReview} /> : null}
          {
            this.state.reviews.map(review => <div> <img src={review.user.image_url} id="user_img"/>{review.user.name} <br/>
            {review.time_created}<br/> {review.text} <br/> <a href={review.url}> Read more </a> </div>
            )

          }

         </div>
      </div>
      //Reviews

 )
}
}

export default Restaurant;
