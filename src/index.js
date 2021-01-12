import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Root from "Root";
import verifyToken, { tokenJWT } from "helpers/verifyToken";
import { setAuthorizationHeader } from "helpers/setAuthorizationHeader";

let decoded = verifyToken(tokenJWT);

let initialState = {
  auth: {
    isAuthenticated: decoded ? true : false,
    user: { id: decoded?.data?.sub ?? "" },
    errorMessage: "",
  },
};

if (decoded) {
  setAuthorizationHeader(tokenJWT);
} else {
  setAuthorizationHeader(null);
}

ReactDOM.render(
  <React.StrictMode>
    <Root initialState={initialState}>
      <App />
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
