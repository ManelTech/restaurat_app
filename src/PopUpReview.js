import React, { Component } from 'react';
import './PopUpReview.css';

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
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  handleFormUser= (event) => {
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
    this.handlePopUp();

  }
  handlePopUp= () => {
    console.log('handling popup')
    this.props.toggle();
  }
  render() {
    return (
      <div className="modal2">
        <div className="modal_content">
          <form onSubmit={this.handleSubmit} >
            <h3>Add a Review</h3>
            <p> User Name </p>
            <input type="text" name="name"  onChange= {this.handleFormUser}
            value={this.state.user.name} placeholder="Enter your name"/>
            <br />
            <p> Review </p>
            <input type="textarea" name="text" onChange={this.handleForm}  value={this.state.text}/>
            <br />
            <input type="submit" value="Add Review" onClick={this.handleSubmit} />
          </form>
        </div>
      </div>
    );
  }
}
export default PopUpReview;
