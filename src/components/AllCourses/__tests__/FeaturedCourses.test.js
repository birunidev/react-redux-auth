import { mount } from "enzyme";
import FeaturedCourse from "../FeaturedCourse";
import FeaturedCourses from "../FeaturedCourses";

let wrapped;
beforeEach(function () {
  wrapped = mount(
    <FeaturedCourses
      featuredCourses={[
        {
          title: "asdasd",
          mentor: "asdasd",
          img: "/assets/featured-course-1.svg",
          price: 180,
          stars: 5,
        },
        {
          title: "asdasd",
          mentor: "asdasd",
          img: "/assets/featured-course-1.svg",
          price: 180,
          stars: 5,
        },
      ]}
    />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("renders featured course card correctly", () => {
  expect(wrapped.find(FeaturedCourse).length).toEqual(2);
});

it("renders item not found", () => {
  const localWrapped = mount(<FeaturedCourses featuredCourses={[]} />);

  expect(localWrapped.find(FeaturedCourse).length).toEqual(0);
  expect(localWrapped.find('[data-testid="no-feature-text"]').text()).toBe(
    "No Featured Courses"
  );
});
