import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handle actions of save comments", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "new comment",
  };
  const updatedState = commentsReducer([], action);
  expect(updatedState).toEqual(["new comment"]);
});

it("handles actions with unknown type", () => {
  const updatedState = commentsReducer([], { type: "La La La" });
  expect(updatedState).toEqual([]);
});
