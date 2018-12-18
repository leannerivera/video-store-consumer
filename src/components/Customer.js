import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './Customer.css';


class Customer extends Component {


  render() {

    return (
      <div className="customer">
        <section className="customer__content">
           <p className="customer__content-name">{this.props.name}</p>
           <button
             onClick={() => this.props.selectCustomerCallback(this.props.id)}
             type="button"
             className="customer__select-btn"
             label="Select"
           >
           Select
           </button>
        </section>
      </div>
    );
  }
}

Customer.propTypes = {
   name: PropTypes.string.isRequired,
   id: PropTypes.number,
   selectCustomerCallback: PropTypes.func.isRequired
}

export default Customer;
