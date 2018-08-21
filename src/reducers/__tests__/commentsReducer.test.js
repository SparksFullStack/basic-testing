// importing the reducer and the action type
import commentsReducer from 'reducers/commentsReducer';
import { SAVE_COMMENT } from 'actions/types';

// opening an 'it' block to test the reducer
it('should handle actions with a type of SAVE_COMMENT', () => {
    // creating a fake action using the action type we imported
    const action = {
        type: SAVE_COMMENT,
        payload: "New Comment"
    };

    // calling the reducer with an empty array as the initial state and passing in the action
    const newState = commentsReducer([], action);

    // making an assertion about the state that should be returned from the reducer
    expect(newState).toEqual(["New Comment"]);
})