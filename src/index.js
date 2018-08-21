import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import registerServiceWorker from './registerServiceWorker';
import Root from 'Root';

// passing in an empty object here so that the store initializes as an empty object

ReactDOM.render(
<Root>
    <App />
</Root>, document.getElementById('root'));
registerServiceWorker();
