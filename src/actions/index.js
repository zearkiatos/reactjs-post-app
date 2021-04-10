import TYPES from '../types';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: TYPES.FETCH_POSTS, payload: response })
};

export const selectPost = () => {
    return {
        type: TYPES.SELECT_POST
    }
}