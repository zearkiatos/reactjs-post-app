import TYPES from '../types';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
    const response = await jsonPlaceholder.get('/posts');
    return {
        type: TYPES.FETCH_POSTS,
        payload: response
    };
};