import { mount } from "enzyme";
import AllWebinars from "..";
import Webinar from "../Webinar";

let wrapped;

it("renders 2 webinar component", () => {
  wrapped = mount(
    <AllWebinars
      allWebinars={[
        {
          img: "/assets/webinar-1.png",
          title: "How to build modern websites using next js and strapi",
          time: "1 day left",
          follows: 90,
        },
        {
          img: "/assets/webinar-2.png",
          title: "Build an e-commerce using Gatsby js and Stripe",
          time: "1 days left",
          follows: 130,
        },
      ]}
    />
  );

  expect(wrapped.find(Webinar).length).toEqual(2);
  wrapped.unmount();
});

it("renders no webinar text and 0 webinar component", () => {
  wrapped = mount(<AllWebinars allWebinars={[]} />);

  expect(wrapped.find(Webinar).length).toEqual(0);
  expect(wrapped.render().text()).toEqual("No Webinars");
  wrapped.unmount();
});
