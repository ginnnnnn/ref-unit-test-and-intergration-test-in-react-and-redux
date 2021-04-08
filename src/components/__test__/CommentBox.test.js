import CommentBox from "components/CommentBox";
import { mount } from "enzyme";
import Root from "root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and a button", () => {
  //assertion
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("the textarea", () => {
  let text;
  beforeEach(() => {
    text = "check check";
    wrapped.find("textarea").simulate("change", {
      target: { value: text },
    });
    wrapped.update();
  });

  it("has a textarea and can type in text", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual(text);
  });

  it("textarea gets empty when form submited", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
