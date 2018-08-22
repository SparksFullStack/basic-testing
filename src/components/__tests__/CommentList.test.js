import React from 'react';
import Root from 'Root';
import CommentList from 'components/CommentList';

// importing mount so that we can do full dom rendering
import { mount } from 'enzyme';

let wrapped;

// mounting the CommentList with a connection to the store before each test
beforeEach(() => {
    // creating initial state to pass to the root
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };

    wrapped = mount(
        // adding the initial state to the <Root> component
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it('should create one <li> per comment in the Store', () => {
    // because we added two comments to the initial state, we should expect to find two <li> elements in the CommentList component
    expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
    // making use of the .render() method to return a Cheerio Wrapper and then using .text() to check the text in the element
    // we need to make one assertion for each <li> that we're expecting to render, two in this case
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
});

