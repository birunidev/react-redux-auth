import React from "react";
import { Provider } from "react-redux";
import store from "./redux";

export default function Root({ initialState = {}, children }) {
  return <Provider store={store(initialState)}>{children}</Provider>;
}
