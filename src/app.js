import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
// import { addExpense } from './actions/expenses'
// import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();

//console.log(store.getState());

// store.subscribe(()=>{
//     const state = store.getState();
//     const visibleExpense = getVisibleExpenses(state.expenses, state.filter);
//     console.log(visibleExpense);
// })
// const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 10000, createdAt: 3330}));
// const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount: 30000, createdAt: -322}));
// const expenseThree = store.dispatch(addExpense({ description: 'rent bill', amount: 10000, createdAt: 3330}));

// const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 4500}));
// const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount: 30000, createdAt: 1000}));
// const expenseThree = store.dispatch(addExpense({ description: 'rent bill', amount: 109500}));

// store.dispatch(setTextFilter('water'));

// setTimeout(()=> {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filter);
//console.log(visibleExpense);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// ReactDOM.render(<AppRouter />, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));