import AllCourses from "components/AllCourses";

import { mount } from "enzyme";
import { CourseCard } from "../CourseCard";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <AllCourses
      allCourses={[
        {
          title: "UI/UX Design",
          icon: "/assets/ui-ux-design.svg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ",
          time: "4 days left",
          price: 200,
        },
        {
          title: "UI/UX Design",
          icon: "/assets/ui-ux-design.svg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ",
          time: "4 days left",
          price: 200,
        },
      ]}
    />
  );
});
afterEach(() => {
  wrapped.unmount();
});

it("renders 2 courses", () => {
  expect(wrapped.find(CourseCard).length).toEqual(2);
});

it("renders no course text", () => {
  let localWrapped = mount(<AllCourses allCourses={[]} />);
  expect(localWrapped.find(CourseCard).length).toEqual(0);
  expect(localWrapped.render().text()).toEqual("No Courses Added");
  localWrapped.unmount();
});
