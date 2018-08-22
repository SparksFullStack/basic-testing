// importing the action creator and the action type for saving a comment
import { saveComment } from 'actions/actionCreators';
import { SAVE_COMMENT } from 'actions/types';

// using a describe block to group the tests together
describe('saveComment', () => {
    it('should have the correct action type', () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        const action = saveComment('New Comment');

        expect(action.payload).toEqual('New Comment');
    })
});