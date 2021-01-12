import Stars from "components/Stars";
import { mount } from "enzyme";

let wrapped;

beforeEach(() => {
  wrapped = mount(<Stars num={3} />);
});

afterEach(() => {
  wrapped.unmount();
});

it("renders 5 stars", () => {
  expect(wrapped.find("#star-filled").length).toEqual(3);
  expect(wrapped.find("#star-outlined").length).toEqual(2);
});
