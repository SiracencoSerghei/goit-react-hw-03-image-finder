import { React, Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {

    static propTypes = {
        images: PropTypes.array.isRequired,
      };

    render() {
        const { images } = this.props;
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