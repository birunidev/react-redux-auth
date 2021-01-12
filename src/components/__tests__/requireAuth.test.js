import requireAuth from "components/requireAuth";
import { mount } from "enzyme";
import Root from "Root";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

const FakeComponent = () => <p>Fake component</p>;
const Component = requireAuth(FakeComponent);

it("renders to the correct component", () => {
  let wrapped;
  wrapped = mount(
    <Root initialState={{ auth: { isAuthenticated: true } }}>
      <Router>
        <Component />
      </Router>
    </Root>
  );

  expect(wrapped.find(FakeComponent).length).toEqual(1);
});

it("renders to the redirect component", () => {
  let wrapped;
  wrapped = mount(
    <Root initialState={{ auth: { isAuthenticated: false } }}>
      <Router>
        <Component />
      </Router>
    </Root>
  );

  expect(wrapped.find(Redirect).length).toEqual(1);
});
