import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import restaurants from'./App.js';
import axios from 'axios';
import PopUpReview from './PopUpReview.js';
class Restaurants extends Component{
  state = {
    reviews : [],
    selectedValue:"05",
    popup: false
  }

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
  handleChange= (event) => {
    console.log(event.target.value)
    const selectedValue= event.target.value;
    this.setState({selectedValue: selectedValue
    });
  }
handleSubmit= (event) => {
  event.preventDefault();
  this.props.handleFilter(this.state.selectedValue)
}
togglePopReview = () => {
  console.log('toggle')
   this.setState({
     popup: !this.state.popup
   });
 };
 addReview= (newReview) => {

   this.state.reviews.push(newReview);
   const reviews = this.state.reviews;
   this.setState({reviews});
 }
  render(){
    console.log(this.state.popup)
    return(
      <div>
       <div>
         <form>
          <label>
           <h5> Filter by Rating: </h5>
           <select  onChange={this.handleChange} onClick={this.handleSubmit} >
      <option disabled defaultValue>Filter Restaurants</option>
      <option value="05"> Show all Restaurants </option>
      <option value="55"> 5 Stars</option>
      <option value="45">Highest Rating: 4 to 5</option>
      <option value="35">3 to 5 Stars</option>
      <option value="02">Lowest Rating: 0 to 2 Stars</option>
      <option value="34"> 3 to 4 </option>
    </select>
    </label>
    </form>
  </div>
     <div id="restaurants_reviews">
      <div id="restaurants">

          { this.props.restaurants.filter(restaurant=>this.props.filterValue[0]<= restaurant.rating&&restaurant.rating<=this.props.filterValue[1]).map(restaurant =>  <li><img src={restaurant.image_url} className="restaurant_image"/> {restaurant.name} <br/> Rating: {restaurant.rating} <br/> <a href="#reviews" onClick= {() => this.getReviews(restaurant.id)}> See Reviews </a> <br/></li> )}
        </div>
        <div id="reviews" >
          <a href="#add_review" onClick={this.togglePopReview}> Add a Review </a>
               {this.state.popup ? <PopUpReview toggle={this.togglePopReview} addReview={this.addReview} /> : null}
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
export default Restaurants;
