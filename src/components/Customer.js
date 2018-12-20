import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Customer.css';


class Customer extends Component {
  constructor(props) {
    super(props);
  }

  render() {


    return (
      <div className="customer item">
           <div className="item_details">
             <h2 className="customer__content-name">{this.props.name}</h2>
             <p></p>
             <p className="movie_checkout_count">{this.props.movieCheckCount} movies checked out</p>
           </div>
           <button
             onClick={() => this.props.selectCustomerCallback(this.props.id)}
             type="button"
             className="customer__select-btn"
             label="Select"
           >
           Select For Rental
           </button>
      </div>
    );
  }
}

Customer.propTypes = {
   name: PropTypes.string.isRequired,
   id: PropTypes.number.isRequired,
   selectCustomerCallback: PropTypes.func.isRequired,
   movieCheckCount: PropTypes.number.isRequired,
}

export default Customer;
