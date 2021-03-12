/* eslint-disable react/button-has-type */
// 3rd party

import React, { useState } from "react";

import { Card } from "antd";
import "./style.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import BodyComp from "../../components/bodyComp";
import { userInviteRequest, userDeleteRequest } from "../../actions/user";

function Home(props) {
  const { handleInvite, handleDelete } = props;
  const [email, setEmail] = useState("");
  const [id, setId] = useState(2);

  const handleSubmit = () => {
    handleInvite({ email, id });
  };

  const userDelete = () => {
    handleDelete({ email, id });
  };
  return (
    <div className="col-md-8 m-auto mt-4">
      <Card className="card">
        <div className="header d-flex justify-content-between mt-4 ml-4">
          <div style={{ width: "50%" }}>
            <h4>3 Attendees in Waiting Room</h4>
          </div>
          <div className="d-flex justify-content-end">
            <div className="inputDiv">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Start typing......"
              />
              <SearchIcon className="searchIcon" />
            </div>
            <div className="mr-5">
              <button className="warningBtn" onClick={handleSubmit}>
                INVITE STAFF
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3 dropdown-divider" />
        <BodyComp onClick={userDelete} name="Jaroslav Brabec" />
        <BodyComp name="Tum Tantasatiyanon" />
        <div className="my-3 mx-4 dropdown-divider" />
        <BodyComp name="Dobroslawa Antokolskiy" />
      </Card>
    </div>
  );
}

Home.propTypes = {
  handleInvite: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInvite: (payload) => dispatch(userInviteRequest(payload)),
    handleDelete: (payload) => dispatch(userDeleteRequest(payload)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
