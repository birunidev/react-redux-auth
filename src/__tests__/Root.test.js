import { mount } from "enzyme";
import Root from "Root";

it("renders the props correctly", () => {
  let wrapped = mount(
    <Root initialState={{ auth: { isAuthenticated: false } }}></Root>
  );

  expect(wrapped.prop("initialState")).toEqual({
    auth: { isAuthenticated: false },
  });
});
