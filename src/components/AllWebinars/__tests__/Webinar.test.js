import { mount } from "enzyme";
import Webinar from "../Webinar";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Webinar
      img="/assets/webinar-1.svg"
      title="Webinar 1"
      time="1 day left"
      follows={180}
    />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("renders 6 div, 2 img, 1 p, 2 span", () => {
  expect(wrapped.find("div").length).toEqual(6);
  expect(wrapped.find("img").length).toEqual(3);
  expect(wrapped.find("p").length).toEqual(1);
  expect(wrapped.find("span").length).toEqual(2);
});

it("renders correct img, title, time and follows", () => {
  expect(wrapped.find(`[data-testid="webinar-image"]`).prop("src")).toEqual(
    "/assets/webinar-1.svg"
  );
  expect(wrapped.find(`[data-testid="webinar-title"]`).text()).toEqual(
    "Webinar 1"
  );

  expect(wrapped.find(`[data-testid="webinar-time"]`).text()).toEqual(
    "1 day left"
  );

  expect(wrapped.find(`[data-testid="webinar-follows"]`).text()).toEqual(
    "180 Joined"
  );
});
