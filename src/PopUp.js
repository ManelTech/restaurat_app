import React, { Component } from "react";
import axios from 'axios'

export default class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
       name: '',
       address: '',
       image_url:'addedrestaurant.png',
       rating: 'N/A',
       coordinates: {
         latitude: '',
         longitude:''
       }
     };
  }
  handleClick = () => {
    this.props.toggle();
  }
  handleForm = (event) => {
    console.log(event.target.value)
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  getCoordinates= (newRestaurantAddress) => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.mapbox.com/geocoding/v5/mapbox.places/${newRestaurantAddress}.json?types=address&limit=1&access_token=pk.eyJ1IjoibWFudWVsbGE5NCIsImEiOiJjazQ2MDdxYjYwZHZoM3Nwamdtbm0yM2V4In0.cXAVeDfxx1GU_t3hydDhrw`)
  .then(res => {
    const data = res.data.features;
  console.log(data[0].center);
  const coordinates= data[0].center;
  this.setState({
    coordinates:{
    latitude: coordinates[1],
    longitude: coordinates[0]

  }
  })
    this.props.addRestaurant(this.state);
  })
  }
  handleSubmit= (event) => {
    event.preventDefault();
    this.getCoordinates(this.state.address);

  }
  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form  >
            <h3>Add a Restaurant!</h3>
            <p> Restaurant's Name </p>
              <input type="text" name="name"  onChange= {this.handleForm}
              value={this.state.restaurantName}
              placeholder="Enter Restaurant's name"/>
            <br />
            <p> Restaurant's Address </p>
              <input type="text" name="address" onChange={this.handleForm}
              value={this.state.addresss}
              placeholder="Enter your adresse" />
            <br />
            <button
            type="submit"
            className="btn btn-info"
            onClick={this.handleSubmit}> Add Restaurant </button>
          </form>
        </div>
      </div>
    );
  }
}
