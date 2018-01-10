import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
} from '../actions/types';

const InitialState = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            const newState = {};
            newState[action.payload.prop] = action.payload.value;
            return { ...state, ...newState };

        case EMPLOYEE_CREATE:
            return InitialState;

        default:
            return state;
    }
};
