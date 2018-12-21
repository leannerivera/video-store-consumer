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
  }

  onSubmitHandler = (event) => {

    event.preventDefault();
    // this.props.searchMovieCallback(this.state);


    const url = 'http://localhost:3000/movies?query=';
    const encodedQuery = encodeURIComponent(this.state.movie);
    // console.log(url+encodedQuery);

    axios.get(url+encodedQuery)
    // axios.get(url,apiPayload)
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

  render () {
    const resultList = this.state.result.map((movie)=>{
      return <SearchCard
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
      <form
        className="search_form"
        name="movie-search-bar"
        id="movie-search-bar"
        onSubmit={this.onSubmitHandler}
      >
        <label htmlFor="movie" className="search_label">Movie Title</label>
        <input
          name="movie"
          id="movie"
          value={this.state.movie}
          onChange={this.onChangeHandler}
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
  searchMovieCallback: PropTypes.func.isRequired,
  selectMovieCallback: PropTypes.func.isRequired,
};


export default SearchForm;
