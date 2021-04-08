import CommentList from "components/CommentList";
import { mount } from "enzyme";
import Root from "root";

let wrapped;
beforeEach(() => {
  const initialState = {
    comments: ["new comment 1", "new comment 2"],
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("create one li per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("show the text for each li", () => {
  expect(wrapped.render().text()).toContain("new comment 1");
  expect(wrapped.render().text()).toContain("new comment 2");
});
