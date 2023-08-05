import PropTypes from "prop-types";
import classNames from "classnames";

import { Loading } from "../Loading";
import { Icon } from "./Icon";

import "./style.scss";

export const Button = ({
  text,
  className,
  icon,
  isLoading,
  onClick,
  // This is how I'll be doing aria labels for right now.
  ...props
}) => {
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
      {...props}
    >
      {icon && <Icon icon={icon} />}
      {text && text}
    </button>
  );
};

Button.defaultProps = {
  text: null,
};
Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
