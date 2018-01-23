import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './AddTodo';
import { Provider } from 'react-redux';
import store from './../redux/store/store';

ReactDOM.render(
    <Provider store={store}>
        <AddTodo />
    </Provider>,
    document.getElementById('app')
);