import React, { Component } from "react";

export default class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
       addedRestaurant:{
       name: '',
       address: ''
     }
     };
  }
  handleClick = () => {
    this.props.toggle();
  };
  changeHandler = (event) => {
     this.setState({username: event.target.value});
   }
  render() {
    console.log(this.state);
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form>
            <h3>Add a Restaurant!</h3>
            <p> Restaurant's Name </p>
              <input type="text" name="name"  onChange={event => this.setState({ name: event.target.value })}
              value={this.state.addedRestaurant.name}
              placeholder="Enter Restaurant's name"/>
            <br />
            <p> Restaurant's Address </p>
              <input type="text" name="address" onChange={event => this.setState({ address: event.target.value })}
              value={this.state.addedRestaurant.addresss}
              placeholder="Enter your adresse" />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
