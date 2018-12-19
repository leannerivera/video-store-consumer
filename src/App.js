import React, { Component } from 'react';

import logo from './logo.svg';
import SearchForm from './components/SearchForm'
import MovieLibrary from './components/MovieLibrary'
import MovieCard from './components/MovieCard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import  axios from 'axios';
import CustomerList from './components/CustomerList';
import Rental from './components/Rental';
import Home from './components/Home';


const URL = 'http://www.localhost:3000/';
const SEARCH_URL = 'localhost:3000/movies/?query='

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      library: [],
      currentMovie: undefined,

      customerSelectedId: undefined,
      customerSelectedName:undefined,

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
}
  addRental = (newRental) => {
    const dueDate = Date.now() +7;
    const apiPayload = {
      ...newRental,
      customer: this.state.customerSelectedId,
      dueDate: dueDate,
    }


    const url = "http://localhost:3000/Psycho/checkout";
    axios.post(url, apiPayload)
    .then((response)=>{
      // console.log('API Response Success')
      // console.log(response);
      const myNewRental = response.data;

      this.setState({
        movieSelected:"",
        customerSelected:"",
        errorMessage:'Rental added',
      })
    })
    .catch((error)=>{
      this.setState({
        errorMessage:`Failure ${error.message}`,
      })
    });
  };

  selectCustomer = (customerId, customerName)=>{

    this.setState({customerSelectedId: customerId, customerSelectedName: customerName});

  };

  render() {

    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                <Link to="/customers/">Customers</Link>
              </li>
            </ul>

            <section className="rentalBox">
              <Rental
                customerId = {this.state.customerSelectedId}
                customerName = {this.state.customerSelectedName}
                movie = {this.state.movieSelected}
                addRentalCallback={this.addRental}
                />
            </section>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/customers/" render={()=> <CustomerList selectCustomerCallback={this.selectCustomer}/>} />
        </div>

      </Router>

    );
  }

}

export default App;
