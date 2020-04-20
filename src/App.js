// 3rd party
import React from "react";
// eslint-disable-next-line import/no-unresolved
import "bootstrap/dist/css/bootstrap.min.css";

// lib
import Routes from "./routes";
import NavBar from "./components/navbar";

const App = () => {
  return (
    <Routes>
      <NavBar />
    </Routes>
  );
};

export default App;
