import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'App';
import registerServiceWorker from './registerServiceWorker';
import Root from 'Root';

ReactDOM.render(
<Root>
    <BrowserRouter>
        <Route path='/' component={App}/>
    </BrowserRouter>
</Root>, document.getElementById('root'));
registerServiceWorker();
