import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import fetchImagesWithQuery from '../services/fetchAPI';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    fetchImagesWithQuery(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .then(this.scroll)
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  
  handleClick = () => {
    this.fetchImages();
  };

  onSearchSubmit = (searchQuery) => {
    this.setState({
      searchQuery: searchQuery,
      page: 1,
      images: [],
    })
  };

  
  scroll = () => {
    return window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

   

  render() {
    const {images, loading} = this.state;
    // console.log(this.state);
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageGallery images={images} />
        {loading && <Loader />}
        {images.length > 0 && !loading && <Button onClick={this.handleClick} />}
      </div>
    );
  }
}

export default App;