import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("saveComment", () => {
  let action;
  beforeEach(() => {
    action = saveComment(["new comment"]);
  });
  it("has a correct type", () => {
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has a correct payload", () => {
    expect(action.payload).toEqual(["new comment"]);
  });
});
