import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import fetchImagesWithQuery from '../services/fetchAPI';

class App extends Component {
  state = {
    data: [],
  };

  onSearchSubmit = (searchQuery) => {
    fetchImagesWithQuery(searchQuery)
      .then(data => {
        this.setState({ data });
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleClick = () => {
    console.log('sss');
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageGallery images={data} />
        {data.length > 0 && <Button onClick={this.handleClick} />}
      </div>
    );
  }
}

export default App;