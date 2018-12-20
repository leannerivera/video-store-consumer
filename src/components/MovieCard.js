import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './movieCard.css';

// const MovieCard = (props) => {

class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-card">
        <section className="movie-img">
         {this.props.image_url}
        </section>
        <section className="movie-card--body">
          <p className="movie_title">{this.props.title }</p>
          <button
            onClick={() => this.props.selectMovieCallback(this.props.id)}
            type="button"
            className="movie__select-btn"
            label="Select"
            />
          Select
        </section>
      </div>

    );
  }

}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,

  title: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  selectMovieCallback: PropTypes.func.isRequired,
};

export default MovieCard;
