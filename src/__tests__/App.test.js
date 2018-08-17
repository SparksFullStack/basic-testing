// React and the method we'll use from Enzyme
import React from 'react';
import { shallow } from 'enzyme';

// the components to test
import App from 'App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// initialize the variable to hold the component so that it can be accessed by all the tests
let wrapped;


// mounting <App /> before each of the tests run
beforeEach(() => {
    wrapped = shallow(<App />);
})

// testing for the existence of CommentBox
it('should render a single instance of CommentBox', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

// testing for the existence of CommentList
it('should render a single instance of CommentList', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});