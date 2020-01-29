import React, { Component } from "react";
import axios from 'axios'

export default class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
       name: '',
       address: '',
       image_url:'addedrestaurant.png',
       rating: '',
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
  getCoordinates= () => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.address}.json?types=address&limit=1&access_token=pk.eyJ1IjoibWFudWVsbGE5NCIsImEiOiJjazQ2MDdxYjYwZHZoM3Nwamdtbm0yM2V4In0.cXAVeDfxx1GU_t3hydDhrw`)
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
  .then(() => {
      this.handlePopUp();
  })
  .catch(function (error) {
   // handle error
   console.log('error',error);
 })
  }
  handleSubmit= (event) => {
    event.preventDefault();
    this.getCoordinates();

  }
  handlePopUp= () => {
    console.log('handling popup')
    this.props.toggle();
  }
  closePopup= () => {
    setTimeout(this.handleClick(), 10);
  }
  render() {
    // console.log(this.state);
    console.log('this.props',this.props);
    return (
      <div className="modal1">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form onSubmit={this.handleSubmit} >
            <h3>Add a Restaurant!</h3>
            <p> Restaurant's Name </p>
              <input type="text" name="name"  onChange= {this.handleForm}
              value={this.state.restaurantName}
              placeholder="Enter Restaurant's name"/>
            <br />
            <p> Rating </p>
              <input type="text" name="rating"  onChange= {this.handleForm}
              value={this.state.rating}
              placeholder="Enter Rating"/>
            <br />
            <p> Restaurant's Address </p>
              <input type="text" name="address" onChange={this.handleForm}
              value={this.state.addresss}
              placeholder="Enter your adresse" />
            <br />
            <input type="submit"
          onClick={this.handleSubmit} />
          </form>
        </div>
      </div>
    );
  }
}
