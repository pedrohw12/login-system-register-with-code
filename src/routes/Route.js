import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const token = localStorage.getItem("@FireSpotsToken:token");

  if (!token && isPrivate) {
    window.location.href = "/";
    return;
  }

  if (token && !isPrivate) {
    window.location.href = "/home";
    return;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {};
