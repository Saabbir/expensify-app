import moment from 'moment';
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount
} from '../../actions/filters';

test('should return `SET_TEXT_FILTER` action object', () => {
  const actionObj = setTextFilter('rent');
  expect(actionObj).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  });
});

test('should return `SORT_BY_DATE` action object', () => {
  const actionObj = sortByDate();
  expect(actionObj).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should return `SORT_BY_AMOUNT` action object', () => {
  const actionObj = sortByAmount();
  expect(actionObj).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should return `SET_START_DATE` action object', () => {
  const actionObj = setStartDate(moment(0));
  expect(actionObj).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should return `SET_END_DATE` action object', () => {
  const actionObj = setEndDate(moment(100));
  expect(actionObj).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(100)
  });
});