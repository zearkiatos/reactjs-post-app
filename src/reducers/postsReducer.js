import TYPES from "../types";
export default (state = [], action) => {
  switch (action.type) {
    case TYPES.FETCH_POSTS: {
      return action.payload;
    }
    default:
      return state;
  }
};
