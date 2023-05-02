import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Loader from '../Loader';

export default class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    selectedImage: PropTypes.object.isRequired,
  };
  state = {
    loading: true,
  };

  componentDidMount() {
    const img = new Image();
    img.src = this.props.selectedImage.largeImageURL;
    img.onload = () => this.setState({ loading: false });
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    const img = new Image();
    img.src = this.props.selectedImage.largeImageURL;
    img.onload = null;
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  overlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { selectedImage } = this.props;
    const { loading } = this.state;

    return (
      <div className="Overlay" onClick={this.overlayClick}>
        <div className="Modal">
          {loading && <Loader />}
          <img
            src={selectedImage.largeImageURL}
            alt={selectedImage.tags}
            onLoad={() => this.setState({ loading: false })}
            style={{ display: loading ? 'none' : 'block' }}
          />
          { !loading && <p className="tags">{selectedImage.tags}</p>}
        </div>
      </div>
    );
  }
}