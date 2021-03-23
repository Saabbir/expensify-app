import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should return default filters state', () => {
  const state = filtersReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should return filters state with `sortBy` value of `date`', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const state = filtersReducer(currentState, {
    type: 'SORT_BY_DATE'
  });
  expect(state.sortBy).toBe('date');
});

test('should return filters state with `sortBy` value of `amount`', () => {
  const state = filtersReducer(undefined, {
    type: 'SORT_BY_AMOUNT'
  });
  expect(state.sortBy).toBe('amount');
});

test('should return filters state with `text` value of `rent`', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  });
  expect(state.text).toBe('rent');
});

test('should return filters state with `startDate` value', () => {
  const startDate = moment().subtract(4, 'days');
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate
  });
  expect(state.startDate).toEqual(startDate);
});

test('should return filters state with `endDate` value', () => {
  const endDate = moment().add(4, 'days');
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate
  });
  expect(state.endDate).toEqual(endDate);
});