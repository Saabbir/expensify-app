import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h2>{ description }</h2>
    </Link>
    <p>Amount - { amount }</p>
    <p>CreatedAt - { createdAt }</p>
  </div>
);

export default connect()(ExpenseListItem);