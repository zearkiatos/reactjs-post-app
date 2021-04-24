import { memoize } from 'lodash';
import TYPES from '../types';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import faker from 'faker';

export const fetchPostsAndUsers = () => async dispatch => {
    console.log('About to Fetch posts!');
    await dispatch(fetchPosts());
    console.log('Fetching posts!');
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    const mappedPosts = mapperPosts(response.data);

    dispatch({ type: TYPES.FETCH_POSTS, payload: mappedPosts });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: TYPES.FETCH_USER, payload: response.data });
};

const mapperPosts = posts => posts.map(post => ({
    ...post,
    'avatar': faker.image.avatar()
}));

export const selectPost = () => {
    return {
        type: TYPES.SELECT_POST
    }
}