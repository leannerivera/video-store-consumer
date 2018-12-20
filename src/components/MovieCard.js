import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = (props) => {
  const { id, title } = props;

    return (
      <div className="movie-card">
        <section className="movie-card__body">
          <h1>{ props.title }</h1>
          <button
            onClick={() => this.props.selectMovieCallback(this.props.id, this.props.title)}
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
  selectMovieCallback: PropTypes.func.isRequired,
};

export default MovieCard;
