import TYPES from '../types';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import faker from 'faker'

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    const mappedPosts = mapperPosts(response.data)

    dispatch({ type: TYPES.FETCH_POSTS, payload: mappedPosts })
};

const mapperPosts = posts => posts.map(post => ({
    ...post,
    'avatar': faker.image.avatar
}))

export const selectPost = () => {
    return {
        type: TYPES.SELECT_POST
    }
}