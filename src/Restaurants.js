import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RestaurantData from './restaurants.json';
class RestaurantsList extends Component{
  render(){
    return(
      <div>
      {RestaurantData.map((restaurantDetail,index) =>{
        return <div>
        <h3>{restaurantDetail.restaurantName}</h3>
        <h5>{restaurantDetail.ratings.comment}</h5>

        </div>
      })}
      </div>
    )
  }
}
export default RestaurantsList;
// function Restaurants() {
//   return (
//    <div>
//    <p> Hello from restaurants Component</p>
//    </div>
//   );
// }
//
// export default Restaurants;
