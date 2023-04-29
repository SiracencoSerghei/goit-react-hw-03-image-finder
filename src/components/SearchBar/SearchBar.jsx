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
    this.props.onSubmit(inputValue);
    console.log(this.state.input);
  };

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.onSubmit(this.state.input);
    }
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onHandleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyPress}
          />
          <button type="submit" className="SearchForm-button">
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}