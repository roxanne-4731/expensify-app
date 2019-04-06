import {createStore, combineReducers} from "redux";
import uuid from 'uuid';

// ADD-EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD-EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = (
    {
        id
    } = {}) => (
    {
        type: 'REMOVE-EXPENSE',
        id
    }
);

const editExpense = (id, updates) => (
    {
        type: 'EDIT-EXPENSE',
        id,
        updates
    }
);

const setTextFilter = (text = '') => (
    {
        type: 'SET-TEXT-FILTER',
        text
    }
);

const sortByAmount = () => (
    {
        type: 'SORT-BY-AMOUNT'
    }
);

const sortByDate = () => (
    {
        type: 'SORT-BY-DATE'
    }
);

// SET-START-DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET-END-DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD-EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE-EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT-EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            });
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET-TEXT-FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT-BY-AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT-BY-DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE' :
            return {
                ...state,
                startDate: action.startDate

            };
        case 'SET_END_DATE' :
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};



// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
    console.log(visibleExpenses);

});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));

// const removeExpenseOne = store.dispatch(removeExpense({id: expenseOne.expense.id}));
//
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
//
store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
//
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
//
// store.dispatch(setStartDate(0));

// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoStates = {
    expenses: [{
        id: 'wertyuiop',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};