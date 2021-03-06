import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './TableRow';
import NavBar from './NavBar';

class IndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: ''
    };
    this.addItemService = new ItemService();
  }

  componentDidMount() {
    axios.get('https://infinite-cliffs-28384.herokuapp.com/items')
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    if(this.state.items instanceof Array) {
      return this.state.items.map(function(object, i) {
        return <TableRow obj={object} key={i} />;
      })
    }
  }

  render() {
    var currentPath = this.props.location.pathname;
    return (
      <div className="container">
        <NavBar location={currentPath}/>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>No.</td>
              <td>Item</td>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}
 export default IndexItem;
