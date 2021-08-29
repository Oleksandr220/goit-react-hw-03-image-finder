import PropTypes from 'prop-types';

import { Component } from 'react';

export default class Searchbar extends Component {
  static prtpTypes = {
    request: PropTypes.string,
  };

  state = {
    request: '',
  };

  handleNameChange = event => {
    this.setState({ request: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.request.trim() === '') {
      // toast('Please add  Request.');
      return;
    }

    this.props.requestSubmit(this.state.request);
    this.setState({ request: '' });
  };

  render() {
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              value={this.state.request}
              onChange={this.handleNameChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
