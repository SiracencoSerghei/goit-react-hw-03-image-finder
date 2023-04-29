import { React, Component } from 'react';
// import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {


    render() {
        const { images } = this.props;
        return (
            <ul className='ImageGallery'>
                {images && images.map(image => (
                    <ImageGalleryItem
                        key={image.id}
                        image={image} />
                ))}

            </ul>
        )
    }
}