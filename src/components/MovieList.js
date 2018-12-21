import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import axios from 'axios';
import './MovieList.css';

const URL = "http://localhost:3000/movies/";


class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios.get(URL)
    .then((response) => {
      this.setState({
        movies: response.data
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        errorMessage: error.message,
      })
    })
  }


  render() {
    const movieList = this.state.movies.map((movie) => {
      return <MovieCard
      key={movie.id}
      selectMovieCallback={this.props.selectMovieCallback}
      {...movie}
      />
    });

    return (
      <div>
      <section className="movie-list">
      {movieList}
      </section>
      </div>
    );

  }
}

MovieList.propTypes = {
  selectMovieCallback: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MovieList;
