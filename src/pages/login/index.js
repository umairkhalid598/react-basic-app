// 3rd party
import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// lib
import "./style.css";
import TextField from "../../components/TextField";
import Button from "../../components/button";
import { userLoginRequest } from "../../actions/user";

const Login = (props) => {
  const { handleLogin } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="col-4 m-auto">
      <TextField
        label="Email"
        name="email"
        value={email}
        type="email"
        placeholder="Enter email"
        handleChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        name="password"
        value={password}
        type="password"
        placeholder="Password"
        handleChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variation="outline-primary"
        name="loginButton"
        value="Login"
        handleSubmit={() => handleLogin({ email, password })}
      />
    </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (payload) => dispatch(userLoginRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
