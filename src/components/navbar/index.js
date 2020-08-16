// 3rd party
import React from "react";
import { Link } from "react-router-dom";

// lib
import { Home, Login, SignUp } from "../../routes/constants";

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid d-flex flex-row">
        <div className="p-2">
          <Link to={Home}>Home</Link>
        </div>
        <div className="p-1">
          <Link to={Login}>Login</Link>
        </div>
        <div className="p-1">
          <Link to={SignUp}>SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
