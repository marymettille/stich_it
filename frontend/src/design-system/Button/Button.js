import classNames from "classnames";
import "./style.scss";

export const Button = ({ children, className, onClick }) => {
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

  return (
    <button
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={children}
    >
      {children}
    </button>
  );
};
