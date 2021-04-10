import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import expensesSum from "../selectors/expenses-total";
import setLocalCurrency from "../utils/setLocalCurrency";

// Set local currency symbol based on user location
setLocalCurrency();

const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? "expense" : "expenses";
  const formattedExpenseTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div className="c-page-header">
      <div className="l-wrap">
        <h2 className="c-page-header__title">
          Viewing <strong>{expensesCount}</strong> {expenseWord} totalling{" "}
          <strong>{formattedExpenseTotal}</strong>
        </h2>
        <div className="u-mt-32">
          <Link to="/add" className="c-button">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ expenses, filters }) => {
  const visibleExpenses = selectExpenses(expenses, filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: expensesSum(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
