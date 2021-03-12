// 3rd party

import React from "react";
import { Card } from "antd";
import "./style.css";

import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
// import { ReactComponent as TextIcon } from "../../assets/images/text.svg";
// import { ReactComponent as TrashIcon } from "../../assets/images/trash.svg";
import BodyComp from "../../components/bodyComp";

function Home() {
  return (
    <div className="col-md-8 m-auto mt-4">
      <Card className="card">
        <div className="header d-flex justify-content-between mt-4 ml-4">
          <div style={{ width: "50%" }}>
            <h4>3 Attendees in Waiting Room</h4>
          </div>
          <div className="d-flex justify-content-end">
            <div className="inputDiv">
              <input type="text" placeholder="Start typing......" />
              <SearchIcon className="searchIcon" />
            </div>
            <div className="mr-5">
              <button className="warningBtn">INVITE STAFF</button>
            </div>
          </div>
        </div>
        <div className="mt-3 dropdown-divider" />
        <BodyComp name="Jaroslav Brabec" />
        <BodyComp name="Tum Tantasatiyanon" />
        <div className="my-3 mx-4 dropdown-divider" />
        <BodyComp name="Dobroslawa Antokolskiy" />
      </Card>
    </div>
  );
}

export default Home;
