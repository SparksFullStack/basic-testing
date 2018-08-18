import { combineReducers } from 'redux'; 

import commentsReducer from 'reducers/commentsReducer';

const rootReducer = combineReducers({
    comments: commentsReducer
});

export default rootReducer;