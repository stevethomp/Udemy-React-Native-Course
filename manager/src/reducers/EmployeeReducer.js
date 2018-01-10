import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const InitialState = {};

export default (state = InitialState, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
