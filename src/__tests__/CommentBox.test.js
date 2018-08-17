// importing React and the Full DOM Render method from Enzyme
import React from 'react';
import { mount } from 'enzyme';

// importing the component to test
import CommentBox from 'components/CommentBox';

// declaring the component mounting variable in the global scope
let wrapped;

// mounting the component to test before each individual test
beforeEach(() => wrapped = mount(<CommentBox />));

// unmounting the component after each individual test so that it doesn't interfere with JSDOM's virtual DOM
afterEach(() => wrapped.unmount());

// testing for the existence of the 'textarea' and 'button' elements inside of the component
it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})

// testing that users can enter text into the 'textarea' element
it('has a textarea element that users can type inside of', () => {
    // finding the 'textarea' element so we have a reference to it
    wrapped.find('textarea')
        // simulating a change and passing in a static value for the event object
        .simulate('change', { target: {
            value: "cheesedick"
        }})
    
    wrapped.update();

    // testing that the value passed in through the mock event did get set
    expect(wrapped.find('textarea').prop('value')).toEqual('cheesedick');
})

// testing that the form can successfully submit and is set equal to an empty string afterwards
it('should be set equal to an empty string after submittal', () =>{ 
    // setting the value of the text area so that it can be submitted
    wrapped.find('textarea')
        .simulate('change', { target: { value: "cheesedick" } });
    wrapped.update();

    // simulating the submission of the form
    wrapped.find('form')
        .simulate('submit');
    wrapped.update();

    // expecting the text area to have an empty string as its
    expect(wrapped.find('textarea').prop('value')).toEqual('');
})