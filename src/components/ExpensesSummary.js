import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesSum from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h2>Viewing {expensesCount} {expenseWord} totalling {formattedExpenseTotal}</h2>
    </div>
  );
}

const mapStateToProps = ({ expenses, filters }) => {
  const visibleExpenses = selectExpenses(expenses, filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: expensesSum(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);