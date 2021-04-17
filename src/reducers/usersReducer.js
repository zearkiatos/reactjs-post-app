import TYPES from '../types';
export default (state = [], action) => {
    switch (action.type) {
        case TYPES.FETCH_USER:
            return [...state, action.payload]
        default:
            return state;
    }
};