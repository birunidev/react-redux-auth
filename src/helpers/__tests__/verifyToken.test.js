const { default: verifyToken } = require("helpers/verifyToken");

// it("returns correct token ", () => {
//   let { token } = verifyToken(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZmY4NjhhNmM3MzUyMzJhMjQwMDU1ODIiLCJpYXQiOjE2MTAzNzgwMjUsImV4cCI6MTYxMDM3ODYyNX0.jnhHOLzrk0t04qs3sM8hE3vyEkULpM0Xwi6GhSay4ss"
//   );

//   expect(token).toEqual(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZmY4NjhhNmM3MzUyMzJhMjQwMDU1ODIiLCJpYXQiOjE2MTAzNzgwMjUsImV4cCI6MTYxMDM3ODYyNX0.jnhHOLzrk0t04qs3sM8hE3vyEkULpM0Xwi6GhSay4ss"
//   );
// });

it("returns null", () => {
  let token = verifyToken("some bad token");

  expect(token).toEqual(null);
});
