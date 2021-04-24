import TYPES from "../types";
const postsReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.FETCH_POSTS: {
      return action.payload;
    }
    default:
      return state;
  }
};
export default postsReducer
