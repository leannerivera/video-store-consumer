import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import axios from 'axios';


const MovieLibrary = (props) => {
  const movieLibrary = props.movies.map((movie) => {
    return <MovieCard key={movie.id}
             selectMovieCallback={props.selectMovieCallback}
             {...movie} />
  });

  return (
    <div className="library">
      {movieLibrary}
    </div>
  )
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
  onSelectMovie: PropTypes.func,
};

export default MovieLibrary;
