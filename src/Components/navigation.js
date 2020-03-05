import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render(){
    return (
      <p>
        <Link to="/home">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </p>
    )
  }
}

export default Navigation;