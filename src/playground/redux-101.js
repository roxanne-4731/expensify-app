import {createStore} from "redux";

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const resetCount = ({reset = 0} = {}) => ({
    type: 'RESET',
    reset
});
const setCount = ({count = 1} = {}) => ({
    type: 'SET',
    count
});
//Reducer
//1. Reducer are pure functions
// 2. Never change states or actions

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: action.reset
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 101}));

/*store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});*/

/*store.dispatch({
    type: 'INCREMENT'
});*/

/*store.dispatch({
    type: 'RESET'
});*/
/*
store.dispatch({
    type: 'DECREMENT'
});*/


/*store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});*/

/*
store.dispatch({
    type: 'SET',
    count: 101
});*/

