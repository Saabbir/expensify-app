import {
  addExpense,
  removeExpense,
  editExpense
} from '../../actions/expenses';

test('should return `ADD_EXPENSE` action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    note: 'last month rent',
    amount: 6500,
    createdAt: 158642
  };
  const actionObj = addExpense(expenseData);
  expect(actionObj).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
});

test('should return `ADD_EXPENSE` action object with default values', () => {
  const actionObj = addExpense();
  expect(actionObj).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
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