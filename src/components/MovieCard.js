import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const { id, title } = props;

    return (
      <div className="movie-card">

        <section className="movie-card--body">
          { props.title }
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
  selectMovieCallback: PropTypes.func.isRequired,
};

export default MovieCard;
