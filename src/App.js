import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    var currentPath = this.props.location.pathname;
    console.log(currentPath);
    return (
      <div className="App container">
        <NavBar location={currentPath}/>
        M.E.R.N. Stack Example
        <br/>
      </div>
    );
  }
}

export default App;
