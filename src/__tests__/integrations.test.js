import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'App';

beforeEach(() => {
    // initializing moxios and providing a fake request
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1'}, { name: 'Fetched #2' }],
    });
});

afterEach(() => {
    // uninstalling moxios after the test has finished running
    moxios.uninstall();
})

it('can fetch a list of comments and then render them', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    wrapped.find('.fetch-comments-button').simulate('click');

    // here we want to introduce a pause so that moxios has time to respond with the fake response
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
    });

    
});