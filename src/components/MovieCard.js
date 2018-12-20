import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = (props) => {
  const { id, title ,image_url} = props;

    return (
      <div className="movie-card">
        <section className="movie-img">
         {image_url}
        </section>
        <section className="movie-card--body">
          <p className="movie_title">{title }</p>
          <button
            onClick={() => this.props.selectMovieCallback(id, title)}
            type="button"
            className="movie__select-btn"
            label="Select"
            />
          Select
        </section>
      </div>

    );

}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  selectMovieCallback: PropTypes.func.isRequired,
};

export default MovieCard;
