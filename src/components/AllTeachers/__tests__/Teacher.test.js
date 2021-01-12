import { mount } from "enzyme";
import Teacher from "../Teacher";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Teacher
      name="Biruni"
      avatar="/assets/avatar.svg"
      bio="frontend developer"
      follows={2000}
    />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has 5 divs, 2 img, 2 p, 2 span, and 1 button", () => {
  expect(wrapped.find("div").length).toEqual(5);

  expect(wrapped.find("img").length).toEqual(2);

  expect(wrapped.find("p").length).toEqual(2);

  expect(wrapped.find("span").length).toEqual(2);
  expect(wrapped.find("button").length).toEqual(1);
});

it("renders correct name, bio, avatar, and follows", () => {
  expect(wrapped.find(`[data-testid="teacher-name"]`).text()).toEqual("Biruni");

  expect(wrapped.find(`[data-testid="teacher-avatar"]`).prop("src")).toEqual(
    "/assets/avatar.svg"
  );
  expect(wrapped.find(`[data-testid="teacher-bio"]`).text()).toEqual(
    "frontend developer"
  );
  expect(wrapped.find(`[data-testid="teacher-follows"]`).text()).toEqual(
    "2000"
  );
});
