
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
    onImageClick: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const { onImageClick, image } = this.props;
    onImageClick(image);
  };

  render() {
    const { webformatURL, tags } = this.props.image;
    return (
      <li className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={this.handleClick}
        />
      </li>
    );
  }
}