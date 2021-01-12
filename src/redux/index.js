import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import combined from "./reducers";

const store = (initialState) =>
  createStore(
    combined,
    initialState,
    compose(
      applyMiddleware(thunk),
      process.env.NODE_ENV !== "production" &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
        ? (a) => a
        : window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
export default store;
