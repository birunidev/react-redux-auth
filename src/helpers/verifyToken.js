import jwt from "jsonwebtoken";

export const tokenJWT = localStorage.getItem("token");

const { REACT_APP_JWT_SECRET_KEY } = process.env;

function verifyToken(token) {
  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, REACT_APP_JWT_SECRET_KEY);
    return {
      data: decoded,
      token,
    };
  } catch (err) {
    console.log(err);
    localStorage.removeItem("token");
    return null;
  }
}
export default verifyToken;
