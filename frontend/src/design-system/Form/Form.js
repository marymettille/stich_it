import classNames from "classnames";
import PropTypes from "prop-types";
import "./style.scss";

export const Form = ({ children, vertical, horizontal }) => {
  const classes = classNames("form-container", {
    vertical,
    horizontal,
  });
  return <div className={classes}>{children}</div>;
};
Form.propTypes = {
  children: PropTypes.node,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
};

Form.Label = ({ children }) => {
  return <h3 className="form-label">{children}</h3>;
};
Form.Label.displayName = "Form.Label";

Form.Description = ({ children }) => {
  return <p>{children}</p>;
};
Form.Label.displayName = "Form.Description";

Form.Form = ({ children }) => {
  return <form>{children}</form>;
};
Form.Label.displayName = "Form.Form";
