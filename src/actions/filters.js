export const setTextFilter = (text = '') => ({
    type: 'SET_TEXTFILTER',
    text
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//const setStartDate = (startDate = undefined) => ({
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//const setEndDate = (endDate = undefined) => ({
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});