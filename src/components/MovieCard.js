import React, { Component } from 'react';

import PropTypes from 'prop-types';
<<<<<<< HEAD
import './MovieCard.css';

const MovieCard = (props) => {
<<<<<<< HEAD
  const { id, title } = props;

    return (
      <div className="movie-card">
        <section className="movie-card__body">
          <h1>{ props.title }</h1>
=======
  const { id, title ,image_url} = props;
=======
import './movieCard.css';

// const MovieCard = (props) => {

class MovieCard extends Component {
  constructor(props) {
    super(props);
  }
>>>>>>> master

  render() {
    return (
      <div className="movie-card">
        <section className="movie-img">
         {this.props.image_url}
        </section>
        <section className="movie-card--body">
<<<<<<< HEAD
          <p className="movie_title">{title }</p>
>>>>>>> master
=======
          <p className="movie_title">{this.props.title }</p>
>>>>>>> master
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
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
=======
  }
>>>>>>> master

}
>>>>>>> master

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,

  title: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  selectMovieCallback: PropTypes.func.isRequired,
};

export default MovieCard;
