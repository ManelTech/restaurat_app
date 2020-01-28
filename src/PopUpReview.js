import React, { Component } from "react";
import ReactMapGL,{ Marker } from "react-map-gl";
import axios from "axios";

class PopUpReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
       text: '',
       user: {
         image_url: 'addedrestaurant.png',
         name:''
       }
     };
  }
  handleClick= () => {
    this.props.toggle();
  }
  handleForm = (event) => {
    console.log(event.target.value)
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  handleFormUser= (event) => {
    console.log(event.target.value)
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({user:{
      image_url: 'addedrestaurant.png',
      [nam]: val}
    });
  }
  handleSubmit= (event) => {
    event.preventDefault();
    this.props.addReview(this.state);

  }
  render() {
    console.log(this.state)
    return (
      <div className="modal2">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form onSubmit={this.handleSubmit} >
            <h3>Add a Review</h3>
            <p> User Name </p>
              <input type="text" name="name"  onChange= {this.handleFormUser}
              value={this.state.restaurantName}
              placeholder="Enter Restaurant's name"/>
            <br />
            <p> Review </p>
              <input type="text" name="text" onChange={this.handleForm}
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
export default PopUpReview;
