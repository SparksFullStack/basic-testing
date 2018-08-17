// React and the method we'll use from Enzyme
import React from 'react';
import { shallow } from 'enzyme';

// the components to test
import App from '../App';
import CommentBox from '../components/CommentBox';
import CommentList from '../components/CommentList';

// testing for the existence of CommentBox
it('should render a single instance of CommentBox', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentBox).length).toEqual(1);
});

// testing for the existence of CommentList
it('should render a single instance of CommentList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentList).length).toEqual(1);
});