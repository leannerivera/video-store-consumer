import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './SearchForm.css';

const SEARCH_URL = 'http://localhost:3000/movies/?query=';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: "",
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

  searchMovie = (movie) => {
    console.log(movie);

    axios.get(SEARCH_URL + movie)
      .then((response) => {
        console.log(response.data);
        const searchResults = response.data.map((result) => {
          this.setState({results: result});
        })
        return searchResults;
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
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
