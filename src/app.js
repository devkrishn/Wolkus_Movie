import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Loading } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route";
import { Hero } from "./components";

import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading == true) {
    // return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={(Hero)} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
