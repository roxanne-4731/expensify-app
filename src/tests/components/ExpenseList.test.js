import {ExpenseList, ExpesnsList} from '../../components/ExpenseList';
import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expense';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});
test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});