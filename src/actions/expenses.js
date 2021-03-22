import {
  v4 as uuidv4
} from 'uuid';

// ADD_EXPENSE
export const addExpense = ({
  description = '',
  note = '',
  createdAt = 0,
  amount = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    createdAt,
    amount
  }
});

// REMOVE_EXPENSE
export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});