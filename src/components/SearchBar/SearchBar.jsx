import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    input: '',
    searched: false,
  };

  handleInputChange = (event) => {
    const inputValue = event.target.value.trim();
    this.setState({ input: inputValue, searched: false });
  };
  
  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.searchQuery);
    if (this.state.input === this.props.searchQuery){
      alert(`You have already selected ${this.state.input}, you can change your search or continue browsing`);
      return
    }
    if (this.state.input || (event.key === 'Enter' && !this.state.searched)) {
      this.props.onSubmit(this.state.input);
      this.setState({ searched: true });
    }
  };

  render() {
    const { input, searched } = this.state;
    const isDisabled = !input || searched;
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
              value={input}
              onChange={this.handleInputChange}
            />
            <button type="submit" className="SearchForm-button" disabled={isDisabled}>
              <span className="SearchForm-button-label">Search</span>
            </button>
          </form>
        </header>
        {input === '' && <p className="Sorry">Sorry, you need to write something.<br /> Please choose category of picture.</p>}
      </>
    );
  }
}