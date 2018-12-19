import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';

import './CustomerList.css';


const URL ="http://localhost:3000/customers"

class CustomerList extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
    };
  }

  componentDidMount() {

    axios.get(`${URL}`)
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



  render() {
    const customerList = this.state.customers.map((customer)=>{

      return <Customer
        key={customer.id}
        id={customer.id}
        name={customer.name}
        selectCustomerCallback={this.props.selectCustomerCallback}
      />
    });

    return (

      <div>
        <section className="errorMessage">
         { this.state.errorMessage}
        </section>
        <section className="customerList">
             {customerList}
        </section>
      </div>
    );

  }
}

CustomerList.propTypes = {
    selectCustomerCallback: PropTypes.func.isRequired,

};

export default CustomerList;
