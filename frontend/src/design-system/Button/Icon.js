import PropTypes from "prop-types";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFile, faHouse } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

export const Icon = ({ icon, className }) => {
  const classes = classNames("base-icon", className);

  let iconType = icon;
  switch (iconType) {
    case "delete":
      iconType = faTrash;
      break;
    case "home":
      iconType = faHouse;
      break;
    case "new":
      iconType = faFile;
      break;
    default:
      break;
  }

  return (
    <FontAwesomeIcon
      icon={iconType}
      className={classes}
      aria-label={`${icon}-icon`}
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};
