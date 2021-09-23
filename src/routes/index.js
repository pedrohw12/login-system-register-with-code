import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Route from "./Route";

import Login from "../atomic/pages/login";
import SignUp from "../atomic/pages/signup";
import Home from "../atomic/pages/home";

import { AuthProvider } from "../contexts/authContext";

const Routes = () => (
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} isPrivate />
      </Switch>
    </AuthProvider>
  </BrowserRouter>
);

export default Routes;
