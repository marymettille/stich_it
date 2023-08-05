import PropTypes from "prop-types";
import classNames from "classnames";

import { Loading } from "../Loading";

import "./style.scss";

export const Button = ({ text, className, isLoading, onClick }) => {
  const classes = classNames("base-button", className);
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  if (isLoading) {
    return (
      <button
        className={classes}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label="Loading"
      >
        {isLoading && <Loading />}
      </button>
    );
  }

  return (
    <button
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={text}
    >
      {text && text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
