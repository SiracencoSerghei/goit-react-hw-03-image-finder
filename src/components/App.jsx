import { React, Component } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import fetchImagesWithQuery from '../services/fetchAPI';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    loading: false,
    endOfResults: false,
    isModalOpen: false,
    selectedImage: '',
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
          endOfResults: images.length === 0,
        }))
      )
      .then(this.scroll)
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleClick = () => {
    const { endOfResults } = this.state;
    if (!endOfResults) {
      this.fetchImages();
    }
  };

  onSearchSubmit = (searchQuery) => {
    this.setState({
      searchQuery: searchQuery,
      page: 1,
      images: [],
      endOfResults: false,
    });
  };

  scroll = () => {
    return window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  openModal = (selectedImage) => {
    this.setState({ isModalOpen: true, selectedImage });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { images, loading, endOfResults, isModalOpen, selectedImage } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} showErrorMessage={images.length === 0} />
        <ImageGallery images={images} openModal={this.openModal} />
        {loading && <Loader />}
        {isModalOpen && <Modal selectedImage={selectedImage} closeModal={this.closeModal} />}
        {images.length > 0 && !endOfResults && <Button onClick={this.handleClick} />}
        {endOfResults && images.length > 0 && (
          <p className='Sorry'>We're sorry, <br/> but you've reached the end <br/> of search results.</p>
        )}
      </div>
    );
  }
}

export default App;