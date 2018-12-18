import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';

import './CustomerList.css';


const LIST = [
 {
 "name": "Shelley Rocha",
 "registered_at": "Wed, 29 Apr 2015 07:54:14 -0700",
 "address": "Ap #292-5216 Ipsum Rd.",
 "city": "Hillsboro",
 "state": "OR",
 "postal_code": "24309",
 "phone": "(322) 510-8695",
 "account_credit": 13.15
 },
 {
 "name": "Curran Stout",
 "registered_at": "Wed, 16 Apr 2014 21:40:20 -0700",
 "address": "Ap #658-1540 Erat Rd.",
 "city": "San Francisco",
 "state": "California",
 "postal_code": "94267",
 "phone": "(908) 949-6758",
 "account_credit": 35.66
 }
];

class CustomerList extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
  //
  //   axios.get(`${this.props.url}${this.props.boardName}`+"/cards")
  //    .then((response)=>{
  //      const customerList = response.data.map((customer)=>{
  //        return <
  //        Customer key = {customer.key}
  //        id = {customer.id}
  //        name = {customer.name}
  //        >
  //      });
  //      this.setState({
  //        customers:customerList
  //      });
  //    })
  //    .catch((error)=>{
  //      this.setState({
  //        errorMessage: error.message,
  //      });
  //    });

  const addHardCode = LIST.map((item, index)=>{
    return <Customer
      key={item.index}
      id={item.index}
      name={item.name}
    />
  });


  }


  render() {
    const customerList = this.state.customers.map((customer)=>{

      return <Customer
        key={customer.id}
        id={customer.id}
        name={customer.name}
      />
    });

    return (

      <div>
        <section>
         { this.state.errorMessage}
        </section>
        <section className="customerList">
             {customerList}
        </section>
      </div>
    );

  }
}

// CustomerList.propTypes = {
    // url: PropTypes.string.isRequired,
    // boardName: PropTypes.string.isRequired,
// };

export default CustomerList;
