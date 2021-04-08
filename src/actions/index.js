import {
  SAVE_COMMENT,
  FETCH_COMMENT_START,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAIL,
} from "actions/types";
import axios from "axios";

export const saveComment = (comment) => ({
  type: SAVE_COMMENT,
  payload: comment,
});
export const fetchCommentStart = () => ({
  type: FETCH_COMMENT_START,
});
export const fetchCommentSuccess = (comments) => ({
  type: FETCH_COMMENT_SUCCESS,
  payload: comments,
});
export const fetchCommentFail = (err) => ({
  type: FETCH_COMMENT_FAIL,
  payload: err,
});

export const fetchCommentAsync = () => async (dispatch) => {
  dispatch(fetchCommentStart());
  try {
    const res = await axios("https://jsonplaceholder.typicode.com/comments");
    if (!res.data) {
      throw new Error("somthing wrong");
    }
    const comments = res.data.map(({ name }) => name);
    dispatch(fetchCommentSuccess(comments));
  } catch (err) {
    dispatch(fetchCommentFail(err));
  }
};
