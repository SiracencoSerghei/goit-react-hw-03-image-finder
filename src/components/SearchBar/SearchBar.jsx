import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    input: '',
  };


  handleInputChange = (event) => {
    const inputValue = event.target.value.trim();
    this.setState({ input: inputValue });
  };

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.onSubmit(this.state.input);

    }
  };

  render() {
    return (
      <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onHandleSubmit} onKeyDown={this.handleKeyPress}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </header>
      {this.state.input === '' && <p className="Sorry" >Sorry, you need to write something.<br/> Please choose category of picter.</p>}
      </>
    );
  }
}