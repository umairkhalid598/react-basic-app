// 3rd party
import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, value, variation, handleSubmit }) => {
  return (
    <input
      type="button"
      className={`btn btn-${variation}`}
      value={value}
      name={name}
      onClick={handleSubmit}
    />
  );
};

Button.defaultProps = {
  variation: "primary",
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  variation: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

export default Button;
