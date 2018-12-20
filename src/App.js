import React, { Component } from 'react';
import Home from './components/Home';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import MovieLibrary from './components/MovieLibrary';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Rental from './components/Rental';
import CustomerList from './components/CustomerList';

const URL = 'http://www.localhost:3000/';
// const SEARCH_URL = 'http://localhost:3000/movies/?query=';
const RENTAL_URL = 'http://localhost:3000/rentals/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      library: [],
      movieSelected: "",
      customers: [],
      customerSelected: "",
    };
  }



  addRental = (newRental) => {
    let rentalDue = new Date(new Date().getTime()+(14*24*60*60*1000));
    let dd = rentalDue.getDate();
    let mm = rentalDue.getMonth()+1;
    let yyyy = rentalDue.getFullYear();
    const selectedMovie = encodeURIComponent(this.state.movieSelected);

    if(dd<10) {
      dd='0'+dd
    }

    if(mm<10) {
      mm='0'+mm;
    }

    const dueDate = yyyy.toString() + "-"+mm.toString()+"-"+dd.toString();
    const apiPayload = {
      ...newRental,
      customer: this.state.customerSelectedId,
      dueDate: dueDate,
    }

    axios.post(RENTAL_URL + selectedMovie, apiPayload)
    .then((response)=>{

      const myNewRental = response.data;

      this.setState({
        movieSelected: "",
        customerSelected: "",
      });

      window.location.reload();
    })
    .catch((error)=>{
      this.setState({
        errorMessage:`Failure ${error.message}`,
      })
    });
  };



  componentDidMount() {
    axios.get(URL)
    .then((response) =>{

      this.setState({
        library: response.data,
      });
    })
    .catch((error) => {
      console.log(error.message);
      this.setState({
        errorMessage: error.message,
      })
    })

    const url = "http://localhost:3000/customers";
    axios.get(url)
     .then((response)=>{

       this.setState({
         customers: response.data,
       });
     })
     .catch((error)=>{
       this.setState({
         errorMessage: error.message,
       });
     });

  }

  onSearchChange = (value) => {
    const regex = new RegExp(`${value}`.toUpperCase());
    console.log(value);
    const library = this.state.library.filter((movie) => {
      return regex.test(movie.name)
    })
    this.setState({
      library,
    })
  }

  selectCustomer = (customerId)=>{
    let customerClicked = this.state.customers.find(function(element) {
      if (element.id == customerId) {
      return element }
    }) ;

    this.setState({customerSelected: customerClicked});

  };

  selectMovie = (movieId)=>{
    console.log(movieId);
    let movieClicked = this.state.library.find(function(element) {
      if (element.id == movieId) {
      return element }
    }) ;

    this.setState({movieSelected: movieClicked});


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

                customerSelect = {this.state.customerSelected}
                movieSelect = {this.state.movieSelected}

                addRentalCallback={this.addRental}

                />

            </section>
          </nav>

          <Route path="/" exact component={Home} />

          <Route path="/search/" render={()=> <SearchForm searchMovieCallback={this.onSearchChange}/>} />
          <Route path="/customers/" render={()=>
            <CustomerList customers={this.state.customers} selectCustomerCallback={this.selectCustomer}/>}
          />
          <Route path="/library/" render={()=>
            <MovieLibrary movies={this.state.library} selectMovieCallback={this.selectMovie}/>}
          />
        </div>

      </Router>

    );
  }
}


export default App;
