import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({
  inverted = false,
  className = "",
  isLoading = false,
  imgSrc = "",
  type = "button",
  text = "Нажмите",
  onClick = null,
}) => {
  const [newClassName] = useState(
    `button ${inverted ? ` button--inverted` : ""}`
  );

  const handleClick = (event) => {
    event.preventDefault();
    if (!isLoading) {
      return onClick();
    }
  };

  return (
    <button
      className={`${newClassName} ${className ?? ""}`}
      onClick={handleClick}
      type={type ? type : "button"}
    >
      {imgSrc && (
        <img
          className={`button__img ${isLoading ? "button__img--hidden" : ""}`}
          src={imgSrc}
          alt=""
        />
      )}
      <span
        className={`button__text ${isLoading ? "button__text--hidden" : ""}`}
      >
        {text}
      </span>
      {isLoading && <div className="button__circle"></div>}
    </button>
  );
};

export default Button;

Button.propTypes = {
  inverted: PropTypes.bool,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  imgSrc: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
