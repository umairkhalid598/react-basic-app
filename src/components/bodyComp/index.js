// 3rd party
import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as TextIcon } from "../../assets/images/text.svg";
import { ReactComponent as TrashIcon } from "../../assets/images/trash.svg";

const BodyComp = ({ name }) => {
  return (
    <div className="d-flex ml-4 my-4 header justify-content-between">
      <div>
        <span className="text-color">{name}</span>
        <span className="badge-custom">20 Minutes</span>
      </div>
      <div className="mr-5">
        <span style={{ color: "#62b4d0" }}>START SESSION</span>
        <span className="icon-css ml-2">
          <TextIcon />
        </span>
        <span className="icon-css">
          <TrashIcon />
        </span>
      </div>
    </div>
  );
};

BodyComp.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BodyComp;
