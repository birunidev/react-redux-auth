import {
  SET_AUTH,
  SET_AUTH_ERROR,
  SET_USER,
  SIGN_OUT,
} from "redux/actions/types";

let initialState = {
  isAuthenticated: false,
  user: { id: "" },
  errorMessage: "",
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        user: {
          id: action.payload,
        },
      };

    case SET_AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case SIGN_OUT:
      return {
        ...state,
        errorMessage: "",
        isAuthenticated: false,
        user: {
          id: "",
        },
      };

    default:
      return state;
  }
}

export default authReducer;
