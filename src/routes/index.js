// 3rd party
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";

// lib
import HomeComponent from "../pages/home";
import LoginComponent from "../pages/login";
import SignUpComponent from "../pages/signup";
import { Home, Login, SignUp } from "./constants";
import history from "../helpers/history";
import AuthRoutes from "./authRoutes";

const Routes = (props) => {
  const { children } = props;
  return (
    <ConnectedRouter history={history}>
      <Router history={history}>
        {children}
        <Switch>
          <AuthRoutes path={Home} exact component={HomeComponent} />
          <Route path={Login} component={HomeComponent} />
          <Route path={SignUp} component={SignUpComponent} />
        </Switch>
      </Router>
    </ConnectedRouter>
  );
};

Routes.defaultProps = {
  children: <></>,
};

Routes.propTypes = {
  children: PropTypes.node,
};

export default Routes;
