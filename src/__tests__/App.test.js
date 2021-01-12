import { mount } from "enzyme";
import App from "App";
import Root from "Root";
import { MemoryRouter, Route } from "react-router";
import Dashboard from "pages/Dashboard";
import Login from "pages/Login";
import renderWithRouter from "helpers/renderWithRouter";
import { screen } from "@testing-library/react";

it("renders the dashboard page", () => {
  let wrapped;
  wrapped = mount(
    <Root initialState={{ auth: { isAuthenticated: true } }}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </Root>
  );

  expect(wrapped.find(Dashboard)).toHaveLength(1);
  expect(wrapped.find(Login)).toHaveLength(0);

  wrapped.unmount();
});

it("renders login page", () => {
  let wrapped;
  wrapped = mount(
    <Root initialState={{ auth: { isAuthenticated: false } }}>
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    </Root>
  );

  expect(wrapped.find(Dashboard)).toHaveLength(0);
  expect(wrapped.find(Login)).toHaveLength(1);
  wrapped.unmount();
});

it("renders 404 page", () => {
  renderWithRouter(
    <Root initialState={{ auth: { isAuthenticated: false } }}>
      <App />
    </Root>,
    { route: "/error" }
  );
  expect(screen.getByTestId("404-title")).toHaveTextContent("404 Page");
});
