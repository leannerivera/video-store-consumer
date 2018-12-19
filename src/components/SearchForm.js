import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      movie: event.target.value.toUpperCase(),
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.searchMovieCallback(this.state);
    this.resetState();
  }

  resetState = () => {
    this.setState({
      movie: "",
    })
  }

  render () {
    return (
      <form
        name="movie-search-bar"
        id="movie-search-bar"
        onSubmit={this.onSubmitHandler}
      >
        <label htmlFor="movie">Movie Title</label>
        <input
          name="movie"
          id="movie"
          value={this.state.movie}
          onChange={this.onChangeHandler}
        />

        <input type="submit" value="submit" />

      </form>
  )}
}

SearchForm.propTypes = {
  searchMovieCallback: PropTypes.func.isRequired,
};


export default SearchForm;
