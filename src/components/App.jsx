import { React, Component } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { fetchImagesWithQuery, param } from '../services/fetchAPI';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    loading: false,
    endOfResults: false,
    isModalOpen: false,
    selectedImage: '',
    totalPhoto: 0,
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
      .then(this.changeState)
      .then(this.scroll)
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  changeState = (data) => {
    this.setState((prevState) => ({
      images: [...prevState.images, ...data.hits],
      page: prevState.page + 1,
      endOfResults: data.hits.length === 0,
      totalPhoto: data.totalHits,
    }));
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
    const { images, page, loading, isModalOpen, selectedImage, totalPhoto } = this.state;
    const restPhoto = totalPhoto - (page - 1) * param.per_page;

    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageGallery images={images} openModal={this.openModal} />
        {loading && <Loader />}
        {isModalOpen && <Modal selectedImage={selectedImage} closeModal={this.closeModal} />}
        {page > 1 && restPhoto > 0 ? <Button onClick={this.handleClick} /> : null}
        {totalPhoto !== 0 && restPhoto < 0 && (
          <p className="Sorry">
            We're sorry, <br /> but you've reached the end <br /> of search results.
          </p>
        )}
      </div>
    );
  }
}
export default App;