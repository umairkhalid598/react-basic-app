// 3rd party
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

// lib
import HomeComponent from "../pages/home";
import LoginComponent from "../pages/login";
import { Home, Login } from "./constants";

const Routes = (props) => {
  const { children } = props;
  return (
    <Router>
      {children}
      <Switch>
        <Route path={Home} exact component={HomeComponent} />
        <Route path={Login} component={LoginComponent} />
      </Switch>
    </Router>
  );
};

Routes.defaultProps = {
  children: <></>,
};

Routes.propTypes = {
  children: PropTypes.node,
};

export default Routes;
