import React, { Component } from "react";
import axios from 'axios'

export default class Header extends Component {
  render() {
    return(
    <div className="header_main">
    <div className="logo">
    <img src="REVAPP.png" className="logo"/>
    </div>
    <div className="title">
     <h2 > REVAPP </h2>
     </div>
     </div>
    )
  }
}
