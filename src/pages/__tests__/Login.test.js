import { act, waitFor } from "@testing-library/react";
import { mount } from "enzyme";
import Login from "pages/Login";
import Root from "Root";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <Login />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("renders correct jsx elements", () => {
  expect(wrapped.find("form").length).toEqual(1);
  expect(wrapped.find("input").length).toEqual(2);
  expect(wrapped.find("label").length).toEqual(2);
  expect(wrapped.find("button").length).toEqual(1);
});

it("shows text when user types input", async () => {
  await waitFor(() => {
    wrapped.find("input.email-input").simulate("change", {
      target: { name: "email", value: "birunidev@gmail.com" },
    });
  });

  await waitFor(() => {
    wrapped.find("input.password-input").simulate("change", {
      target: { name: "password", value: "1234" },
    });
  });

  wrapped.update();
  expect(wrapped.find("input.email-input").prop("value")).toEqual(
    "birunidev@gmail.com"
  );
  expect(wrapped.find("input.password-input").prop("value")).toEqual("1234");
});

it("shows errors classnames ", async () => {
  await waitFor(() => {
    wrapped.find("input.email-input").simulate("change", {
      target: { name: "email", value: "birunidev" },
    });
  });

  await waitFor(() => {
    wrapped.find("input.email-input").simulate("change", {
      target: { name: "password", value: "12" },
    });
  });

  await waitFor(() => {
    wrapped.find("button").simulate("click");
  });

  expect(wrapped.find("input.email-input").prop("className")).toBe(
    "email-input block px-5 py-3 border w-full my-3 rounded-lg text-gray-400 border-red-400 text-red-400 "
  );
  expect(wrapped.find("input.password-input").prop("className")).toBe(
    "password-input block px-5 py-3 border w-full my-3 rounded-lg text-gray-400 border-red-400 text-red-400 "
  );
  expect(wrapped.find('[data-testid="error-email-input"]').text()).toBe(
    "Please input a valid email"
  );
  expect(wrapped.find('[data-testid="error-password-input"]').text()).toBe(
    "Password must have at least 4 chars"
  );
});
