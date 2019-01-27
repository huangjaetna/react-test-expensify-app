import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilter';
const ExpenseDashboardPage = () => (
    <dive>
        <ExpenseListFilters />
        <ExpenseList />
    </dive>
);

export default ExpenseDashboardPage;