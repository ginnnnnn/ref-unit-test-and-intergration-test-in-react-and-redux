import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

//beforeEach
let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("show a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("show a Comment List", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
