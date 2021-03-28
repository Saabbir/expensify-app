import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    focusedInput: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (focusedInput) => {
    this.setState(() => ({ focusedInput }));
  };  
  render() {
    return (
      <div className="l-wrap">
        <div className="c-form c-form--filters">
          <div className="c-form__group">
            <input 
              type="text" 
              className="c-form__control"
              placeholder="Search Expense" 
              value={this.props.filters.text} 
              onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value))
              }}
            />
          </div>
          <div className="c-form__group">
            <select 
              className="c-form__control"
              value={this.props.filters.sortBy}
              onChange={(e) => {
                if (e.target.value === 'date') {
                  this.props.dispatch(sortByDate())
                } else if (e.target.value === 'amount') {
                  this.props.dispatch(sortByAmount())
                }
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="c-form__group">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId='startDateId'
              endDate={this.props.filters.endDate}
              endDateId='endDateId'
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.focusedInput}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>      
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

export default connect(mapStateToProps)(ExpenseListFilters);