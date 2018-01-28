import axios from 'axios';

class ItemService {
  sendData(data) {
    axios.post('https://infinite-cliffs-28384.herokuapp.com/items/add/post', {
      item: data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  updateData(data, id) {
    axios.post('https://infinite-cliffs-28384.herokuapp.com/items/update/' + id, {
      item: data
    })
      .then(res => this.setState({ items: res.data }))
      .catch(err => console.log(err));
  }

  deleteData(id) {
    axios.get('https://infinite-cliffs-28384.herokuapp.com/items/delete/' + id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err));
  }
}

export default ItemService;
