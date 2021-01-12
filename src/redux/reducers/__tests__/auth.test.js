import { SET_AUTH, SET_AUTH_ERROR, SET_USER } from "redux/actions/types";
import authReducer from "redux/reducers/auth";

let initialState = {
  isAuthenticated: false,
  errorMessage: "",
  user: {
    id: "",
  },
};

it("does the SET_AUTH ACTION and return the correct state", () => {
  let action = {
    type: SET_AUTH,
    payload: true,
  };

  const newState = authReducer(initialState, action);

  expect(newState).toEqual({
    isAuthenticated: true,
    errorMessage: "",
    user: {
      id: "",
    },
  });
});

it("does the SET_USER ACTION and return the correct state", () => {
  let action = {
    type: SET_USER,
    payload: "5306u20qrj31131",
  };

  const newState = authReducer(initialState, action);

  expect(newState).toEqual({
    isAuthenticated: false,
    errorMessage: "",
    user: {
      id: "5306u20qrj31131",
    },
  });
});

it("does the SET_ERROR ACTION and return the correct state", () => {
  let action = {
    type: SET_AUTH_ERROR,
    payload: "wrong email and password",
  };

  const newState = authReducer(initialState, action);

  expect(newState).toEqual({
    isAuthenticated: false,
    errorMessage: "wrong email and password",
    user: {
      id: "",
    },
  });
});
