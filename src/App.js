import React, { Component } from 'react';
import logo from './logo.svg';
import SearchForm from './components/SearchForm'
import MovieLibrary from './components/MovieLibrary'
import MovieCard from './components/MovieCard'
import {Browser as Router, Route, Link } from "react-router-dom";
import './App.css';

const URL = 'http://www.localhost:3000/';
const SEARCH_URL = 'localhost:3000/movies/?query='

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      library: [],
      currentMovie: undefined,
    };
  }

  componentDidMount() {
    axios.get(URL)
    .then((response) =>{
      const movies = response.data.map((movie) => {
        console.log(movie.title);
          const movie = {
          ...movie,
          id: movie.id,
          movie: movie.title,
          about: movie.overview,
          image: movie.image_url,
        }
        return movie;
      })

    this.setState({
      library: movies,
    })
  })
  .catch((error) => {
    console.log(error.message);
    this.setState({
      errorMessage: error.message,
    })
  })

  onSearchChange = (value) => {
    console.log(value);
    const library = movies.filter((movie) => {
      return regex.test(`$(movie.name)`)
    })
    this.setState({
      library,
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

        </p>
      </div>
    )
  })
}

export default App;
