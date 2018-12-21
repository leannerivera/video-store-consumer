import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './SearchForm.css';
import SearchCard from './SearchCard';


class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: "",
      result:[],
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      movie: event.target.value.toUpperCase(),
    });
    this.props.onChangeHandler(event.target.value);
  }

  onSubmitHandler = (event) => {

    event.preventDefault();


    const url = 'http://localhost:3000/movies?query=';
    const encodedQuery = encodeURIComponent(this.state.movie);


    axios.get(url+encodedQuery)

     .then((response)=>{
       this.setState({
         result: response.data,
         movie:"",
       });
     })
     .catch((error)=>{
       this.setState({
         errorMessage: error.message,
       });
     });

  }

  resetState = () => {
    this.setState({
      movie: "",
    })
  }

  addToLibrary = (movie) => {

    const url = 'http://localhost:3000/movies';
    console.log("handle",movie);
    // const movie = {
    //    title: movieParam.title,
    //    release_date: movieParam.release_date,
    //    image_url: movieParam.image_url,
    // }

    axios.post(url, {...movie})

     .then((response)=>{
       console.log(response);
     })
     .catch((error)=>{
       this.setState({
         errorMessage: error.message,
       });
     });

  }



  render () {
    const resultList = this.state.result.map((movie)=>{
    // const searchResults = this.props.searchResults;
    // let resultList = null;
    // if (searchResults) {
      // resultList = searchResults.map((movie)=>{

      return <SearchCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        image_url={movie.image_url}
        overview={movie.overview}
        release_date={movie.release_date}
        addLibraryCallback={()=>this.addToLibrary(movie)}
        // addLibraryCallback={this.addLibraryCallback}
      />
    });


    return (
      <div>
      <form
        className="search_form"
        name="movie-search-bar"
        id="movie-search-bar"
        onSubmit={this.onSubmitHandler}
        // onSubmit={this.searchMovieCallback}
      >
        <label htmlFor="movie" className="search_label">Movie Title</label>
        <input
          name="movie"
          id="movie"
          value={this.state.movie}
          onChange={this.onChangeHandler}
          // value={this.props.movieEntry}
          // onChange={this.onChangeHandlerCallback}

          className="form_input"
        />

        <input type="submit" value="submit" className="btn btn-success new-rental-form--submit"/>
      </form>
      <section className="search_result">
        {resultList}
      </section>
      </div>
  )}
}

SearchForm.propTypes = {
  // searchMovieCallback: PropTypes.func.isRequired,
  addLibraryCallback: PropTypes.func.isRequired,
  // searchResults: PropTypes.array.isRequired,
  // movieEntry: PropTypes.string.isRequired,
  onChangeHandlerCallback:PropTypes.func.isRequired,
};


export default SearchForm;
