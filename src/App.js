import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        M.E.R.N. Stack Example
        <br/>
        <Link to="/index" className="pull-right">All Items</Link>
        <Link to="/add-item" className="pull-right">Create New Item</Link>
      </div>
    );
  }
}

export default App;
