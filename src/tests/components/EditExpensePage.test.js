import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from "../../components/EditExpensePage";
import expense from '../fixtures/expense';

let editExpense, wrapper, removeExpense, history;

beforeEach(() => {
    history = {push: jest.fn()};
    editExpense = jest.fn();
    removeExpense = jest.fn();
    wrapper = shallow(<EditExpensePage
        history={history}
        editExpense={editExpense}
        removeExpense={removeExpense}
        expense={expense[2]}
    />);
});

test('should render EditExpensePage correctly!', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense ', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[2]);
    // wrapper.find('ExpenseForm').prop('expense')(expense[0]);
    expect(editExpense).toHaveBeenLastCalledWith(expense[2].id, expense[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense ', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expense[2].id});
    expect(history.push).toHaveBeenLastCalledWith('/');
});