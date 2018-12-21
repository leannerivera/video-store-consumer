import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = (props) => {
  const { id, title } = props;

    return (
      <div className="movie item">

         <img src={this.props.image_url} alt="movie_post"/>

        <section className="item_details">
          <h2 className="movie_title">{this.props.title }</h2>
          <p>{this.props.release_date}</p>
        </section>
          <button
            onClick={() => this.props.selectMovieCallback(this.props.id, this.props.title)}
            type="button"
            className="item__button"
            label="Select"
            >
            Select For Rental
          </button>

      </div>

    );
  }

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selectMovieCallback: PropTypes.func.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default MovieCard;
