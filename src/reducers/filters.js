import moment from 'moment';


// Filters Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filterReducerDefaultState, action) => {//const filterReducer = ((state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXTFILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        // case 'SORT_BY_AMOUNT':
        //     return state.sort((expenseA, expenseB)=>{ expenseA.amount - expenseB.amount });
        // case 'SORT_BY_DATE':
        //     return state.sort((expenseA, expenseB)=>{ expenseA.date - expenseB.date });
        default:
            return state;
    }
} 