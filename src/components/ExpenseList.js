import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        { props.expenses.map((expense)=>{
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
);

// const ExpenseList = (props) => (
//     <div>
//         <h1>Expense List</h1>
//         { props.filters.text }
//         { props.expenses.length }
//     </div>
// );

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);

//export default ConnectedExpenseList;


// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filter
//     };
// };

// const mapStateToProps = (state) => {
//     return {
//         expenses: selectExpenses(state.expenses, state.filter)
//     };
// };

const mapStateToProps = (state) => ( {
        expenses: selectExpenses(state.expenses, state.filter)
    });

export default connect(mapStateToProps)(ExpenseList);