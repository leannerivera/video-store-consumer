import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './SearchForm.css';

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
    this.props.onChangeHandler(event.target.value);
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
      <div className='movie-search'>
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

          <input type="submit" value="submit" onSubmit={this.onSubmitHandler}/>

        </form>
      </div>
  )}
}

SearchForm.propTypes = {
  searchMovieCallback: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func,
};


export default SearchForm;
