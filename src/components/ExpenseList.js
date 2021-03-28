import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div className="c-expense-list u-mt-32">
    <div className="c-expense-list__header">
      <div className="u-visible-in-mobile">Expenses</div>
      <div className="u-hidden-in-mobile">Expense</div>
      <div className="u-hidden-in-mobile">Amount</div>
    </div>
    {
      props.expenses.length === 0 ? (
        <p className="c-no-expenses-text">No Expenses</p>
      ) : (
        props.expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )
    }
  </div>
);

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);