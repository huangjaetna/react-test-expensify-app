
import moment from 'moment'

export default (expenses, filters) => { //const getVisibleExpenses = (expenses, filters) => {
    return expenses.filter((expense)=>{
        // const startDateMatch = typeof filters.startDate !== 'number' || expense.createdAt >= filters.startDate;
        // const endDateMatch = typeof filters.endDate !== 'number' || expense.createdAt <= filters.endDate;
        const createdAtMoment = moment(expense.createdAt);

        const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(createdAtMoment,'day'): true;
        const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(createdAtMoment,'day'): true;
        const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if (filters.sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1: -1
        } else if (filters.sortBy == 'amount') {
            return a.amount < b.amount ? 1: -1
        }
    });
}