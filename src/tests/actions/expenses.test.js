import {
  addExpense,
  removeExpense,
  editExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';

test('should return `ADD_EXPENSE` action object with provided values', () => {
  const actionObj = addExpense(expenses[1]);
  expect(actionObj).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1]
  })
});

test('should return `REMOVE_EXPENSE` action object', () => {
  const actionObj = removeExpense('abc123');
  expect(actionObj).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  })
});

test('should return `EDIT_EXPENSE` action object', () => {
  const actionObj = editExpense('abc123', {
    description: 'rent'
  });
  expect(actionObj).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      description: 'rent'
    }
  })
});