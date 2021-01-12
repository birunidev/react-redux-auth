import { setAuthorizationHeader } from "helpers/setAuthorizationHeader";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "redux/actions/auth";

export default function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("token");
    setAuthorizationHeader(null);
    dispatch(signOut());
    setTimeout(() => {
      history.push("/login");
    }, 3000);
  }, [dispatch, history]);

  return (
    <div className="text-center h-screen flex justify-center items-center w-full">
      <h1 className="text-2xl text-indigo-900 font-bold">
        You are logged out...
      </h1>
    </div>
  );
}
