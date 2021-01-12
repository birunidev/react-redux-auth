import { mount } from "enzyme";
import { CourseCard } from "../CourseCard";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <CourseCard
      title="Course title"
      icon="assets/course-1.svg"
      time="1 day left"
      price={180}
      desc="lorem ipsum"
    />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has 5 divs, 3 img, 1 button, 3 spans, 1 h5, 1 p", () => {
  expect(wrapped.find("div").length).toEqual(5);
  expect(wrapped.find("img").length).toEqual(3);
  expect(wrapped.find("button").length).toEqual(1);
  expect(wrapped.find("span").length).toEqual(3);
  expect(wrapped.find("h5").length).toEqual(1);
  expect(wrapped.find("p").length).toEqual(1);
});

it("renders the correct title, icon, time, price and desc", () => {
  expect(wrapped.find(`[data-testid="course-icon"]`).prop("src")).toBe(
    "assets/course-1.svg"
  );

  expect(wrapped.find(`[data-testid="course-title"]`).text()).toBe(
    "Course title"
  );

  expect(wrapped.find(`[data-testid="course-desc"]`).text()).toBe(
    "lorem ipsum"
  );

  expect(wrapped.find(`[data-testid="course-price"]`).text()).toBe(`$180`);

  expect(wrapped.find(`[data-testid="course-time"]`).text()).toBe(`1 day left`);
});
