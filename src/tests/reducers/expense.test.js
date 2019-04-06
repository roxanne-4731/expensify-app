import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expense';

test('should setup default expense value ', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should add expense', () => {
    const expense = {
            id: '109',
            description: 'Laptop',
            note: '',
            amount: 29500,
            createdAt: 20000
        };
    const action = {
        type: 'ADD-EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE-EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);

});

test('should  not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE-EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense by id', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT-EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit expense if the id not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT-EXPENSE',
        id: -1,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
