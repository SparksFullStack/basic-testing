// importing the Tiny Validator library to check our store against the JSON Schema
import tv4 from 'tv4';

// importing the JSON Schema
import stateSchema from 'middleware/stateSchema';

export default ({ dispatch, getState }) => (next) => (action) => {
    // immediately calling next so that the action reaches the Reducer (I think)
    next(action);

    // storing the validation in a const. 
    // First parameter passed to '.validate()' is a function that gets the current state from the Redux Store
    const validation = tv4.validate(getState(), stateSchema);

    // logging out relevant information based on the status of the validation
    if (!validation) console.warn('Invalid state schema detected');
    else console.log('Data looks good!');
};