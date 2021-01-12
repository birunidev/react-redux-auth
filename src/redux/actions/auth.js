import api from "api";
import { setAuthorizationHeader } from "helpers/setAuthorizationHeader";
import verifyToken from "helpers/verifyToken";
import { SET_AUTH, SET_USER, SET_AUTH_ERROR, SIGN_OUT } from "./types";

export const setAuth = (formData, cb) => async (dispatch) => {
  // fetch data

  try {
    const response = await api.post("/signin", formData);
    dispatch({ type: SET_AUTH_ERROR, payload: "" });

    let verified = verifyToken(response?.data?.token);

    if (verified) {
      dispatch({ type: SET_USER, payload: response?.data?.uid ?? null });
      dispatch({
        type: SET_AUTH,
        payload: response?.data?.token ? true : false,
      });
      setAuthorizationHeader(response?.data?.token ?? "");
      localStorage.setItem("token", verified.token);
      cb(true);
    } else {
      cb(false);
    }
  } catch (error) {
    dispatch({
      type: SET_AUTH_ERROR,
      payload: error?.response?.data?.message ?? "Wrong email and password",
    });
    cb(false);
  }
};

export function setUser(userId) {
  return {
    type: SET_USER,
    payload: userId,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
    payload: null,
  };
}
