import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import  axios from 'axios';
import CustomerList from './components/CustomerList';
import Rental from './components/Rental';
import Home from './components/Home';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieSelected: undefined,
      customerSelectedId: undefined,
      customerSelectedName:undefined,

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
