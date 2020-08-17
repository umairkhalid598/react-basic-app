// 3rd party
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

// lib
import { Login } from "./constants";
import history from "../helpers/history";

const AuthRoutes = ({ user, exact, path, component: Component }) => {
  useEffect(() => {
    if (!user.token) {
      history.push(Login);
    }
  });
  return <Route path={path} exact={exact} component={Component} />;
};

AuthRoutes.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

AuthRoutes.defaultProps = {
  exact: false,
};

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
  };
};

export default connect(mapStateToProps, null)(AuthRoutes);
