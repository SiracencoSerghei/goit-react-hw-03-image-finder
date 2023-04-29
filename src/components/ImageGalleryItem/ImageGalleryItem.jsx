import {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';

export default class ImageGalleryItem extends Component {
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

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };



// const ImageGalleryItem = ({ image: { id, webformatURL, tags, largeImageURL }, onClick }) => {
//   // console.log(webformatURL, tags, largeImageURL);
//   return (
//     <li className="ImageGalleryItem">
//       <img
//         src={webformatURL}
//         alt={tags}
//         className="ImageGalleryItem-image"
//         onClick={() => onClick(largeImageURL)}
//         // onClick={() => onClick(console.log(largeImageURL))}
//       />
//     </li>
//   );
// };