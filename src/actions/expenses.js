import uuid from "uuid";

// ADD-EXPENSE
export const addExpense = (
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

//REMOVE-EXPENSE
export const removeExpense = (
    {
        id
    } = {}) => (
    {
        type: 'REMOVE-EXPENSE',
        id
    }
);

//EDIT-EXPENSE
export const editExpense = (id, updates) => (
    {
        type: 'EDIT-EXPENSE',
        id,
        updates
    }
);