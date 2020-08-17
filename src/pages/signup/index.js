// 3rd party
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// lib
import "./style.css";
import TextField from "../../components/TextField";
import Button from "../../components/button";
import { userSignUpRequest } from "../../actions/user";
import history from "../../helpers/history";
import { Home } from "../../routes/constants";

const SignUp = (props) => {
  const { handleSignUp, user } = props;

  useEffect(() => {
    if (user.token) {
      history.push(Home);
    }
  });

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="col-4 m-auto">
      <TextField
        label="First Name"
        name="first_name"
        value={firstName}
        type="text"
        placeholder="Enter First Name"
        handleChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        name="last_name"
        value={lastName}
        type="text"
        placeholder="Enter Last Name"
        handleChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="User name"
        name="username"
        value={username}
        type="text"
        placeholder="Enter user name"
        handleChange={(e) => setUsername(e.target.value)}
      />
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
        name="sign_up_button"
        value="Sign Up"
        handleSubmit={() =>
          handleSignUp({
            firstName,
            lastName,
            username,
            email,
            password,
          })
        }
      />
    </div>
  );
};

SignUp.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignUp: (payload) => dispatch(userSignUpRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
