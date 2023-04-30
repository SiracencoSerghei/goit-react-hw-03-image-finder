import {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
  };

  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    // console.log(largeImageURL);
    return (
      <li>
        <img onClick={this.openModal} src={webformatURL} alt={tags} />
        {this.state.isOpen && (
          <Modal
          largeImageURL={largeImageURL}
            close={this.closeModal}
          />
        )}
      </li>
    );
  }
}
