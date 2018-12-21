import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
<<<<<<< HEAD
import axios from 'axios';
import './MovieLibrary.css';

const URL = "http://localhost:3000/movies/";
=======



>>>>>>> master

class MovieLibrary extends Component {
  constructor() {
    super();

<<<<<<< HEAD
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    axios.get(URL)
    .then((response) => {
      this.setState({
        library: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        errorMessage: error.message,
      });
    })
  }

  movieList = this.state.library.map((movie) => {
    return <MovieCard key={movie.id}
      selectMovieCallback={movie.selectMovieCallback}
      {...movie} />
  });

=======
  }

>>>>>>> master
  render() {
    const movies = this.props.movies.map((movie)=>{

      return <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        image_url={movie.image_url}
        selectMovieCallback={this.props.selectMovieCallback}
      />
      
    });

    return (
<<<<<<< HEAD
      <div className="library">
        <h1> Library</h1>
        {movieList}
=======

      <div>
        <section className="movieLib">
             {movies}
        </section>
>>>>>>> master
      </div>
    );

  }
}


MovieLibrary.propTypes = {
  movies: PropTypes.array,
  selectMovieCallback: PropTypes.func,
};

export default MovieLibrary;
