import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      submitError: ''
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => {
        return { 
          submitError: 'Please provide description and amount' 
        }
      });
    } else {
      this.setState(() => ({ submitError: '' }));
      this.props.submitHandler({
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    const amountRegex = /^\d{1,}(\.\d{0,2})?$/
    if (!amount || amount.match(amountRegex)) {
      this.setState(() => ({ amount }));
    }
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  render() {
    return (
      <form className="c-form c-form--stack" onSubmit={this.onSubmit}>
        { this.state.submitError && 
        <p className="c-form__error">{this.state.submitError}</p> }
        <div className="c-form__group">
          <input 
            type="text"
            className="c-form__control"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus
          />
        </div>
        <div className="c-form__group">
          <input 
            type="text"
            className="c-form__control"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
        </div>
        <div className="c-form__group">
          <SingleDatePicker  
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
        <div className="c-form__group">
          <textarea
            placeholder="Expense Note (optional)"
            className="c-form__control c-form__control--textarea"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="c-button">{this.props.submitButtonText}</button>
        </div>
      </form>
    );
  }
}