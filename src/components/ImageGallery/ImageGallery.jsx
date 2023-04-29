import { React, Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {

    static propTypes = {
        images: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
          })
        ).isRequired,
      };

    render() {
        const { images, onClick } = this.props;
        return (
            <ul className='ImageGallery'>
                {images.map(image => (
                    <ImageGalleryItem
                        key={image.id}
                        image={image}
                         />
                ))}

            </ul>
        )
    }
}