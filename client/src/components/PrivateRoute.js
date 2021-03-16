import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth, sendUserInfo } from "../utils/contexts/AuthContext";
import Login from "./Login";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser, userInfo } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser && userInfo.admin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    ></Route>
  );
}
