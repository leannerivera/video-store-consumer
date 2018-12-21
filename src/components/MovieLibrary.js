import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';




class MovieLibrary extends Component {
  constructor() {
    super();

  }

  render() {
    const movies = this.props.movies.map((movie)=>{

      return <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        image_url={movie.image_url}
        release_date={movie.release_date}
        selectMovieCallback={this.props.selectMovieCallback}
      />

    });

    return (

      <div>
        <section className="movieLib">
             {movies}
        </section>
      </div>
    );

  }
}


MovieLibrary.propTypes = {
  movies: PropTypes.array,
  selectMovieCallback: PropTypes.func,
};

export default MovieLibrary;
