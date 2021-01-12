import axios from "api";
import verifyToken from "./verifyToken";

export function setAuthorizationHeader(token) {
  let verifed = verifyToken(token);
  if (verifed) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
