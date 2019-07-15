import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';


test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });

});


test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });

});

test('Should generate sort by date action object', () => {
    // const action = sortByDate();
    // expect(action).toEqual({
    //     type: 'SORT_BY_DATE'
    // });
    

    //Other way of writing the same test case

    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});

});

test('Should generate sort by amount action object', () => {
    // const action = sortByAmount();
    // expect(action).toEqual({
    //     type: 'SORT_BY_AMOUNT'
    // });

    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});

});



test('should setup set  text  filter action object', () => {
    const text = 'Something in';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    });
});

test('should setup set  text  filter action object with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});