import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers/rootReducer';
import async from 'middleware/async'
import logger from 'redux-logger';
import stateValidator from 'middleware/stateValidator'

// you must destructure and set a default value for initial state as you can't pass undefined as the initial state
export default ({ children, initialState = {} }) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(async, logger, stateValidator));
    return (
        // passing in the initial state prop as the initial state
        <Provider store={store}>
            {children}
        </Provider>
    );
}