import { combineReducers } from 'redux'; 

import commentsReducer from 'reducers/commentsReducer';
import authReducer from 'reducers/authReducer';

const rootReducer = combineReducers({
    comments: commentsReducer,
    auth: authReducer,
});

export default rootReducer;