import { mount } from "enzyme";
import FeaturedCourse from "../FeaturedCourse";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <FeaturedCourse
      title="My Featured Course"
      img={`/assets/featured-course-1.svg`}
      star={2}
      mentor="birunidev"
      price={180}
    />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("renders 5 divs, 6 img, 1 h2, 3 spans ", () => {
  expect(wrapped.find("div").length).toEqual(6);
  expect(wrapped.find("img").length).toEqual(6);
  expect(wrapped.find("h2").length).toEqual(1);
  expect(wrapped.find("span").length).toEqual(3);
});

it("renders correct title, img, stars, mentor and price ", () => {
  expect(
    wrapped.find('[data-testid="featured-course-img"]').prop("src")
  ).toEqual("/assets/featured-course-1.svg");
  expect(
    wrapped.find('[data-testid="featured-course-title"]').render().text()
  ).toEqual("My Featured Course");

  expect(wrapped.find("#star-filled").length).toEqual(2);
  expect(wrapped.find("#star-outlined").length).toEqual(3);

  expect(
    wrapped.find('[data-testid="featured-course-mentor"]').render().text()
  ).toEqual("birunidev");

  expect(
    wrapped.find('[data-testid="featured-course-price"]').render().text()
  ).toEqual(`$180`);
});
