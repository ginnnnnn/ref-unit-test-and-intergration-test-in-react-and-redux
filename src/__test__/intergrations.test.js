import { mount } from "enzyme";
import Root from "root";
import moxios from "moxios";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  //set up moxios and stop all other http request
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "fetch#1" }, { name: "fetch#2" }, { name: "fetch#3" }],
  });
  //simulate the axios request . tell moxios if there is a request in this url ,just sync to this reponse
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", (done) => {
  //attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  //find the 'fetchComments' button and click it
  wrapped.find(".fetch-comments-button").simulate("click");
  //introduce a tiny little pause
  //expect to find a list of comments
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(3);
    done();
    wrapped.unmount();
  });
});
