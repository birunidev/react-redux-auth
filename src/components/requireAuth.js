import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const requireAuth = (ChildComponent) => {
  const ComposedComponent = (props) => {
    const auth = useSelector((state) => state.auth.isAuthenticated);

    if (!auth) {
      return <Redirect to="/login" />;
    }
    return <ChildComponent {...props} />;
  };
  return ComposedComponent;
};
export default requireAuth;
