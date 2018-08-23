// this is the boilerplate for the middleware function stack
export default ({ dispatch }) => (next) => (action) => {
    // if the action has a .then property on it's payload, it's a promise...
    // ... if it does not or it doesn't have a payload at all, it's not a promise so we send it on
    if (!action.payload || !action.payload.then) return next(action);

    // here we wait for the promise to resolve, create a new action, and then call 'dispatch()' on the new action
    action.payload.then((response) => {
        // here we copy any and all properties off of the original action and then set the promise response as the new payload
        const newAction = { ...action, payload: response};
        // now we call dispatch and pass in the new action so that it runs through all the middlewares again
        dispatch(newAction);
    })
}; 