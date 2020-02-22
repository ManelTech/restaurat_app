import React, { Component } from 'react';
import Restaurant from './Restaurant.js';
import './Restaurants.css';

class Restaurants extends Component{
  state = {
    selectedValue:"05",
  }
    handleChange= (event) => {
      const selectedValue= event.target.value;
      this.setState({selectedValue: selectedValue
      });
    }
  handleSubmit= (event) => {
    event.preventDefault();
    this.props.handleFilter(this.state.selectedValue)
  }
    render(){
      return(
        <div>
          <div className="filter">
            <form >
              <label>
              <h5> Filter by Rating: </h5>
              <select  onChange={this.handleChange} onClick={this.handleSubmit} >
                <option disabled defaultValue>Filter Restaurants</option>
                <option value="05"> All Restaurants </option>
                <option value="55"> 5 Stars</option>
                <option value="45"> 4 to 5 Stars</option>
                <option value="35">3 to 5 Stars</option>
                <option value="02"> 0 to 2 Stars</option>
                <option value="34"> 3 to 4 Stars </option>
              </select>
              </label>
            </form>
          </div>
          <div id="restaurants_reviews">
            <div id="restaurants">
              { this.props.restaurants.filter(restaurant=>this.props.filterValue[0]<= restaurant.rating&&restaurant.rating<=this.props.filterValue[1]).map(restaurant =>  <Restaurant restaurant = {restaurant} />)}
            </div>
          </div>
        </div>
      )
    }
  }
  export default Restaurants;
