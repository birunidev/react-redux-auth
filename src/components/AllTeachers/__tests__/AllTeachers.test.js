import { mount } from "enzyme";
import AllTeachers from "..";
import Teacher from "../Teacher";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <AllTeachers
      allTeachers={[
        {
          name: "Biruni",
          avatar: "/assets/avatar.svg",
          bio: "frontend developer",
          follows: 2000,
        },
      ]}
    />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("renders 1 teacher component", () => {
  expect(wrapped.find(Teacher).length).toEqual(1);
});

it("renders no teacher text and 0 teacher component", () => {
  let localWrapped = mount(<AllTeachers allTeachers={[]} />);
  expect(localWrapped.find(Teacher).length).toEqual(0);
  expect(localWrapped.find('[data-testid="no-teacher-text"]').text()).toEqual(
    "No Teacher"
  );
  localWrapped.unmount();
});
