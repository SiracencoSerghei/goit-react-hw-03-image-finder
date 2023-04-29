import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.close();
    }
  };

  overlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.close();
    }
  };

  render() {
 console.log(this.props.largeImageURL);
    return (
      <div className="Overlay" onClick={this.overlayClick}>
      <div className="Modal">
        <img src={this.props.largeImageURL}
            alt={this.props.tags} />
      </div>
    </div>
    );
  }
}

// Modal.propTypes = {
//   close: PropTypes.func.isRequired,
//   data: PropTypes.shape({
//     largeImageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//   }),
// };


{/* <div className="Overlay" onClick={this.overlayClick}>
        <div className="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div> */}


      // <BackDrop className="overlay" onClick={this.handleBackdropclick}>
      //   <ModalWindow className="modal">
      //     <img
      //       src={this.props.data.largeImageURL}
      //       alt={this.props.data.tags}
      //       width="1000"
      //     />
      //   </ModalWindow>
      // </BackDrop>