import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Customer from './Customer';

import './CustomerList.css';


class CustomerList extends Component {
  constructor() {
    super();

  }

  render() {
    const customerList = this.props.customers.map((customer)=>{

      return <Customer
        key={customer.id}
        id={customer.id}
        name={customer.name}
        movieCheckCount={customer.movies_checked_out_count}
        selectCustomerCallback={this.props.selectCustomerCallback}
      />
    });

    return (

      <div>
        <section className="customerList">
             {customerList}
        </section>
      </div>
    );

  }
}

CustomerList.propTypes = {
    selectCustomerCallback: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

export default CustomerList;
