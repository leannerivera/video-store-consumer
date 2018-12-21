import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-card">
        <section className="movie-card__title">
          <h1> { this.props.title } </h1>
          <button
            onClick={() => this.props.selectMovieCallback(this.props.id, this.props.title)}
            type="button"
            className="movie-card__select"
            label="Select" >
              Select
          </button>
        </section>
      </div>

    )}
  }


MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  selectMovieCallback: PropTypes.func.isRequired,
};

export default MovieCard;
