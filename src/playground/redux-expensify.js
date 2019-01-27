import { createStore, combineReducers } from 'redux';



///?????? following is wrong???
// const filterReducer = ((state = filterReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'SET_TEXTFILTER':
//             return {
//                 text: action.text
//             }
//         default:
//             return state;
//     }
// } )

// timestamps (milliseconds) January 1st 1970 (unix epoch)
//const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {


// const getVisibleExpenses = (expenses) => {
//     return expenses.filter((expense)=>{
//        return true;
//     });
// }

// store creation



store.subscribe(()=>{
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filter);
    console.log(visibleExpense);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 3330}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -322}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount()); // amount
store.dispatch(sortByDate()); // date

//store.dispatch(setStartDate(125));
//tore.dispatch(setStartDate());
//store.dispatch(setEndDate(11250));
//store.dispatch(setEndDate());
store.dispatch(setTextFilter('rent'));


const demoState = {
    expenses: [{
        id: 'poijadafaf',
        description: 'kajdkfjka  Rent',
        note: 'This was the final payment for the address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'Jen',
//     age: 24
// }

// console.log({
//     age: 27,
//     ...user,
//     location: 'Philadelphia'
// });