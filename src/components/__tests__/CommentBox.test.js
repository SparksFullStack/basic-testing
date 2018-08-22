// importing React and the Full DOM Render method from Enzyme
import React from 'react';
import { mount } from 'enzyme';

// imporint the Root component to initialize the Redux Store inside of the tests
import Root from 'Root';

// importing the component to test
import CommentBox from 'components/CommentBox';

// declaring the component mounting variable in the global scope
let wrapped;

// mounting the component to test before each individual test
beforeEach(() => wrapped = mount(<Root><CommentBox /></Root>));

// unmounting the component after each individual test so that it doesn't interfere with JSDOM's virtual DOM
afterEach(() => wrapped.unmount());

// testing for the existence of the 'textarea' and 'button' elements inside of the component
it('has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
})

// grouping the textarea tests together with 'describe'
describe('test for the textarea', () => {
    // finding the element and having it update before the functions run.
    beforeEach(() => {
        wrapped.find('textarea')
            .simulate('change', { target: { value: 'cheesedick' } })
        wrapped.update();
    })

    // testing that users can enter text into the 'textarea' element
    it('has a textarea element that users can type inside of', () => {
        // finding the 'textarea' element so we have a reference to it
        // wrapped.find('textarea')
            // simulating a change and passing in a static value for the event object
            // .simulate('change', { target: {
            //     value: "cheesedick"
            // }})
        // wrapped.update();

        // testing that the value passed in through the mock event did get set
        expect(wrapped.find('textarea').prop('value')).toEqual('cheesedick');
    })

    // testing that the form can successfully submit and is set equal to an empty string afterwards
    it('should be set equal to an empty string after submittal', () =>{ 
        // setting the value of the text area so that it can be submitted
        // wrapped.find('textarea')
        //     .simulate('change', { target: { value: "cheesedick" } });
        // wrapped.update();

        // simulating the submission of the form
        wrapped.find('form')
            .simulate('submit');
        wrapped.update();

        // expecting the text area to have an empty string as its
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
})

// * NOTE: this function could take the place of both of the above tests as it consolidates the logic of both:
// it('should be able to modify and submit values and should have a value of an empty string after submittal', () => {
//     // simulating text user input
//     wrapped.find('textarea')
//         .simulate('change', { target: { value: 'cheesedick' } });
//     wrapped.update();

//     // asserting that the value should have changed
//     expect(wrapped.find('textarea').prop('value')).toEqual('cheesedick');

//     // simulating the submittal of the form
//     wrapped.find('form')
//         .simulate('submit');
//     wrapped.update();

//     // asserting that the value should have zeroed out
//     expect(wrapped.find('textarea').prop('value')).toEqual('');
// })