import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h2>{ description }</h2>
    </Link>
    <p>Amount - { numeral(amount / 100).format('$0,0.00') }</p>
    <p>CreatedAt - { moment(createdAt).format('MMMM Do, YYYY') }</p>
  </div>
);

export default connect()(ExpenseListItem);