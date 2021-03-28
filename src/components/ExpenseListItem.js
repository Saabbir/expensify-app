import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
  <Link className="c-expense" to={`/edit/${id}`}>
    <div className="c-expense__desc">
      <div className="c-expense__title">{ description }</div>
      <p className="c-expense__createdAt">Created at { moment(createdAt).format('MMMM Do, YYYY') }</p>
    </div>
    <div className="c-expense__amount">
      <div className="c-expense__amount-text">{ numeral(amount / 100).format('$0,0.00') }</div>
    </div>
  </Link>
);

export default connect()(ExpenseListItem);