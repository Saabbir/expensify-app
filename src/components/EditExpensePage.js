import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense } from "../actions/expenses";
import { startRemoveExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
  // Current edit page params id
  const id = props.match.params.id;

  // Find expense with the params id from redux store
  const expense = props.expenses.find((e) => e.id === id);

  // If no expense matching with the id, redirect to homepage
  if (!expense) props.history.push("/");

  return (
    <div className="u-mb-32">
      {console.log()}
      <div className="c-page-header">
        <div className="l-wrap">
          <h2 className="c-page-header__title">Edit Expense</h2>
        </div>
      </div>
      <div className="l-wrap">
        <ExpenseForm
          submitButtonText="Update Expense"
          expense={props.expense}
          submitHandler={(expense) => {
            props.dispatch(startEditExpense(props.expense.id, expense));
            props.history.push("/");
          }}
        />
        <button
          className="c-button c-button--secondary u-mt-16"
          onClick={() => {
            props.dispatch(startRemoveExpense(props.match.params.id));
            props.history.push("/");
          }}
        >
          Remove Expense
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses,
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
