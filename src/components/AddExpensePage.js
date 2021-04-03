import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => (
  <div className="u-mb-32">
    <div className="c-page-header">
      <div className="l-wrap">
        <h2 className="c-page-header__title">Add Expense</h2>
      </div>
    </div>
    <div className="l-wrap">
      <ExpenseForm
        submitButtonText="Add Expense" 
        submitHandler={(expense) => {
          props.dispatch(startAddExpense(expense));
          props.history.push('/');
        }}
      />
    </div>
  </div>
);

export default connect()(AddExpensePage);