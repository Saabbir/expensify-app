import moment from 'moment';

export default (expenses, filters) => {
  return expenses.filter(expense => {

    // Create a moment object for expense creation date
    const createdAtMoment = moment(expense.createdAt);

    // Match start date filter
    const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(createdAtMoment, 'day') : true;

    // Match end date filter
    const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(createdAtMoment, 'day') : true;

    // Match search text
    const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase()) || expense.note.toLowerCase().includes(filters.text.toLowerCase());

    // Return true if all cases matches
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => { // Chaining sort method to sort the filtered array
    if (filters.sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (filters.sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};