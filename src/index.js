import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

// passing in an empty object here so that the store initializes as an empty object
const store = createStore(rootReducer, {});

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
