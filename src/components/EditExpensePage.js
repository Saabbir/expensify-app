import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses'
import { startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => (
  <div>
    <h2>Edit Expense</h2>
    <ExpenseForm
      expense={props.expense}
      submitHandler={(expense) => {
        props.dispatch(startEditExpense(props.expense.id, expense));
        props.history.push('/');
      }}
    />
    <button 
      onClick={() => {
        props.dispatch(startRemoveExpense(props.match.params.id));
        props.history.push('/');
      }}
    >Remove</button>    
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage);