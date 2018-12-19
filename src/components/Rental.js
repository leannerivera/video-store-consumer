import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Rental.css'

class Rental extends Component {
  constructor(props) {
    super(props);

  }

  onSubmit = (event) => {
    event.preventDefault();

    if (this.props.movie === '' || this.props.customerName === '') return;

    console.log(event);
    this.props.addRentalCallback(this.props.movie, this.props.customerName);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} name="new-rental-form" id="new-rental-form" className="new-rental-form">
        <div>
          <label className="new-rental-form--label" htmlFor="movie">Movie Selected</label>
          <input name="movie" value={this.props.movie} />
        </div>
        <div>
          <label className="new-rental-form--label" htmlFor="customer">Customer Selected</label>
          <input name="customer" value={this.props.customerName} />
        </div>

        <input className="btn btn-success new-rental-form--submit" type="submit" name="checkout" value="Checkout" />
      </form>
    );
  }
}

Rental.propTypes = {
  addRentalCallback: PropTypes.func.isRequired,
  movie:PropTypes.func.isRequired,
  customerName:PropTypes.string.isRequired,
};

export default Rental;
