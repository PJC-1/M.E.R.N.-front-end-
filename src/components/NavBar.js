import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    if (this.props.location === "/") {
      return (
        <div>
          <Link to="/index">All Items</Link>
          <Link to="/add-item">Add Item</Link>
        </div>
      );
    } else if (this.props.location === "/add-item") {
      return (
        <div>
          <Link to="/">Home</Link>
          <Link to="/index">All Items</Link>
        </div>
      );
    } else if (this.props.location === "/index") {
      return (
        <div>
          <Link to="/">Home</Link>
          <Link to="/add-item">Add Item</Link>
        </div>
      );
    }
  }
}

export default NavBar;
