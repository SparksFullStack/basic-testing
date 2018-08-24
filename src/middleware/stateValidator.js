// importing the Tiny Validator library to check our store against the JSON Schema
import tv4 from 'tv4';

// importing the JSON Schema
import stateSchema from 'middleware/stateSchema';

export default ({ dispatch, getState }) => (next) => (action) => {
    next(action);

    console.log(tv4.validate(getState(), stateSchema));
};