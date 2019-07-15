import {createStore} from 'redux';

const incrementCount = ( {incrementBy=9} = {} ) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 99} = {}) => ({
    type: 'DECREMENT',
    decrementBy

})

const resetCount = () => ({
    type: 'RESET',

})

const setCount = ({count}) => ({
    type: 'SET',
    count
})

//Reducers
// 1. Reducers are pure functions
// 2. never change state ot action directly 

const countReducer = (state = {count: 0}, action) => {
    
    switch(action.type) {
        case 'INCREMENT': 
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1; 
        return {
            count: state.count - decrementBy
        };
        case 'RESET': 
        return {
            count: 0
        };
        case 'SET':
        return {
            count: action.count
        }
        default: 
            return state;
    }
};

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount());



store.dispatch(incrementCount({incrementBy:999999}));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({count:999}));
