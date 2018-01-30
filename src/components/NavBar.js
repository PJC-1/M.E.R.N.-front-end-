import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>        
        <Link to="/">Home</Link>
        <Link to="/index">All Items</Link>
        <Link to="/add-item">Add Item</Link>
      </div>
    );
  }
}

export default NavBar;
