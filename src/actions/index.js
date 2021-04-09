import TYPES from '../types';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return function (dispatch, getState) {
        const promise = jsonPlaceholder.get('/posts');
        return {
            type: TYPES.FETCH_POSTS,
            payload: promise
        };
    }
};