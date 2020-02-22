import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return(
      <div className="header_main">
        <div className="logo">
          <img src="REVAPP.png" alt="logo_img" className="logo"/>
        </div>
        <div className="title">
          <h2> REVAPP </h2>
        </div>
     </div>
    )
  }
}
