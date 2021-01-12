import axios from "api";
import { setAuthorizationHeader } from "helpers/setAuthorizationHeader";
setAuthorizationHeader;

// it("has axios authorization header", () => {
//   setAuthorizationHeader(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZmY4NjhhNmM3MzUyMzJhMjQwMDU1ODIiLCJpYXQiOjE2MTAzNzgwMjUsImV4cCI6MTYxMDM3ODYyNX0.jnhHOLzrk0t04qs3sM8hE3vyEkULpM0Xwi6GhSay4ss"
//   );

//   expect(axios.defaults.headers.common["Authorization"]).toEqual(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZmY4NjhhNmM3MzUyMzJhMjQwMDU1ODIiLCJpYXQiOjE2MTAzNzgwMjUsImV4cCI6MTYxMDM3ODYyNX0.jnhHOLzrk0t04qs3sM8hE3vyEkULpM0Xwi6GhSay4ss"
//   );
// });

it("has no axios authorization header", () => {
  setAuthorizationHeader("some bad token");

  expect(axios.defaults.headers.common["Authorization"]).toEqual(undefined);
});
