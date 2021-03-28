import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div className="u-mb-32">
    <ExpensesSummary />
    <div className="l-wrap">
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  </div>
);

export default ExpenseDashboardPage;