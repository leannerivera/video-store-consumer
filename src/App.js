import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import  axios from 'axios';
import CustomerList from './components/CustomerList';
import Rental from './components/Rental';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieSelected: undefined,
      customerSelected: undefined,
    };
  }

  addRental = (newRental) => {
    const apiPayload = {
      ...newRental,
      customer: newRental.customer,
      movie: newRental.movie,
    }

    axios.post(URL, apiPayload)
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

  // selectCustomer = (customer)=>{
  //   {movieSelected, customerSelected} = this.state;
  //   customerSelected = customer;
  //   this.setState{customerSelected};
  // };


  render() {
    return (

      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
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

            <section>
              <Rental
                customer = {this.state.customerSelected}
                movie = {this.state.movieSelected}
                addRentalCallback={this.addRental}
                />
            </section>
          </nav>

          <section>
            <CustomerList selectCustomerCallback ={this.selectCustomer} />
          </section>


          <Route path="/customer/" component={CustomerList} />
        </div>

      </Router>

    );
  }
}

export default App;
