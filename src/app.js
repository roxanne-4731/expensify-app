import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configStore from './store/confgureStore';
import AppRouter from './routers/AppRouter';
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configStore();

console.log('test');
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

/*
class OldSyntax {
   constructor() {
       this.name = 'roxanne';
       this.getGreeting = this.getGreeting.bind(this);
   }
   getGreeting() {
       return `Hi, My name is ${this.name}`;
   }
}
const  oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax);

// --------------
class NewSyntax {
   name = 'roxanne';
   getGreeting = () => {
       return `Hi, My name is ${this.name}`;
   }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());

*/
