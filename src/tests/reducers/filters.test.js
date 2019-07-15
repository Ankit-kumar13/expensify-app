import moment from 'moment';
import filterReducers from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filterReducers(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should sort by amount', () => {
    const state = filterReducers(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});


test('should sort by date', () => {

    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = {type: 'SORT_BY_DATE'};
    const state = filterReducers(currentState,action);
    expect(state.sortBy).toBe('date');
});

test('should sort by text', () => {

    const text= 'This is text filter'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filterReducers(undefined, action);
    expect(state.text).toBe(text);
});

test('Should set  start date filter', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };

    const state = filterReducers(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('Should set  end date filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };

    const state = filterReducers(undefined, action);
    expect(state.endDate).toEqual(endDate);
});