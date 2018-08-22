import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers/rootReducer';
import reduxPromise from 'redux-promise';

// you must destructure and set a default value for initial state as you can't pass undefined as the initial state
export default ({ children, initialState = {} }) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(reduxPromise));
    return (
        // passing in the initial state prop as the initial state
        <Provider store={store}>
            {children}
        </Provider>
    );
}