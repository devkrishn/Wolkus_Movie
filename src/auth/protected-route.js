// src/auth/protected-route.js

import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components/index";
import { Home } from "../views";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Home />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
