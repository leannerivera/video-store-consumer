import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import axios from 'axios';

const URL = 'http://localhost:3000/movies/';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      library: [],
    };
  }

  componentDidMount() {
    axios.get(URL)
    .then((response) => {
      this.setState({
        library: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        errorMessage: error.message,
      });
    })
  }

  movieList = this.state.library.map((movie) => {
    return <MovieCard key={movie.id}
      selectMovieCallback={this.props.selectMovieCallback}
      {...movie} />
  });

  render() {
    const movieList = {movieList}
    return (
      <div className="library">
        {movieList}
      </div>
    )
  }
}


MovieLibrary.propTypes = {
  movies: PropTypes.array,
  onSelectMovie: PropTypes.func,
};

export default MovieLibrary;
