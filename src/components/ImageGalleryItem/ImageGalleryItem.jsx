import {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import Loader from 'components/Loader';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
  };

  state = {
    isOpen: false,
    loading: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    const { loading, isOpen } = this.state;
  
    return (
      <li>
        <img onClick={this.openModal} src={webformatURL} alt={tags} />
        {loading && <Loader />}
        {isOpen && (
          <Modal
            largeImageURL={largeImageURL}
            close={this.closeModal}
          />
        )}
      </li>
    );
  }
}
