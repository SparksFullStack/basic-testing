import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'reducers/rootReducer';

// you must destructure and set a default value for initial state as you can't pass undefined as the initial state
export default ({ children, initialState = {} }) => {
    return (
        // passing in the initial state prop as the initial state
        <Provider store={createStore(rootReducer, initialState)}>
            {children}
        </Provider>
    );
}