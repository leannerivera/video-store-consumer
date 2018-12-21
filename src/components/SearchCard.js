import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './MovieCard.css';

// const MovieCard = (props) => {

class SearchCard extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="movie item">

         <img src={this.props.image_url} alt="movie_post"/>

        <section className="item_details">
          <h2 className="movie_title">{this.props.title }</h2>
          <p>{this.props.release_date}</p>
        </section>
          <button
            onClick={() => this.props.addLibraryCallback(this.props)}
            type="button"
            className="item__button"
            label="Select"
            >
            Add to library
          </button>

      </div>

    );
  }

}

SearchCard.propTypes = {
  id: PropTypes.number.isRequired,
  overview:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  selectMovieCallback: PropTypes.func.isRequired,
  addLibraryCallback: PropTypes.func.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default SearchCard;
