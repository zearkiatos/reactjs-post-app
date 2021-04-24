import TYPES from '../types';
const usersReducer =  (state = [], action) => {
    switch (action.type) {
        case TYPES.FETCH_USER:
            return [...state, action.payload]
        default:
            return state;
    }
};

export default usersReducer;