

import moment from 'moment'

import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter} from '../../actions/filters'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate set test filter with empty text action object', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXTFILTER',
        text: ''
    })
})

test('should generate set test filter action with text object', () => {
    const action = setTextFilter('test')
    expect(action).toEqual({
        type: 'SET_TEXTFILTER',
        text: 'test'
    })
})

test('should generate sort by amount action', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate sort by amount action', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})