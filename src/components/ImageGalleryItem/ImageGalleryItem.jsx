import { React, Component } from 'react';
// import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {

    render() {
        const { image } = this.props;
        const { id, webformatURL, largeImageURL, tags } = image;
        return(
          <li className="ImageGalleryItem"  key={id}>
            <img
              className='ImageGalleryItem-image'
              src={webformatURL}
              alt={tags}
              onClick={() => console.log(largeImageURL)}
            />
</li>
        )
    }
}