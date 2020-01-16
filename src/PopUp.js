import React, { Component } from "react";

export default class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // addedRestaurant:{
       name: '',
       address: '',
       image_url:'addedrestaurant.png',
       rating: 'N/A',
       coordinates: {
         longitude: '',
         latitude:''
       }
     //}
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
  handleSubmit= (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state);
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
          <form  onSubmit={this.handleSubmit}>
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
            <input value="Add Restaurant" type="submit"  />
          </form>
        </div>
      </div>
    );
  }
}
