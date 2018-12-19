import React, { Component } from 'react';
import axios from 'axios';

const MovieCard = (props) => {
  const { id, title } = props;
  return (
    <div className="movie-card">

      <section className="movie-card--body">
        { title }
      </section>

  )
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selectMovieCallback: PropTypes.func.isRequired,
};

export default MovieCard;
