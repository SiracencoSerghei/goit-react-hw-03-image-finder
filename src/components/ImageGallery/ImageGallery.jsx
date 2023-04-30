import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

export default class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
  };

  render() {
    const { images, openModal } = this.props;

    return (
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} onImageClick={openModal} />
        ))}
      </ul>
    );
  }
}