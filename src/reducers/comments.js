import { SAVE_COMMENT, FETCH_COMMENT_SUCCESS } from "actions/types";
const reducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENT_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
