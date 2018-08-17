// importing React and the Full DOM Render method from Enzyme
import React from 'react';
import { mount } from 'enzyme';

// importing the component to test
import CommentBox from 'components/CommentBox';

// declaring the component mounting variable in the global scope
let wrapped;

// mounting the component to test before each individual test
beforeEach(() => {
    wrapped = mount(<CommentBox />);
})

// testing for the existence of the 'textarea' and 'button' elements inside of the component
it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})