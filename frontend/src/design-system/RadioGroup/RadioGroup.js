import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

export const RadioGroup = ({ children, horizontal, vertical }) => {
  const classes = classNames("radio-group", {
    horizontal,
    vertical,
  });
  return <div className={classes}>{children}</div>;
};
RadioGroup.propTypes = {
  children: PropTypes.node,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
};

RadioGroup.Label = ({ children }) => {
  return <p className="radio-group-label">{children}</p>;
};
RadioGroup.Label.displayName = "RadioGroup.Label";

RadioGroup.Radio = ({
  checked,
  className,
  labelText,
  name,
  onChange,
  value,
}) => {
  const classes = classNames("radio-input", className);

  return (
    <div className={classes}>
      <input
        type="radio"
        id={name}
        onChange={onChange}
        checked={checked}
        value={value}
      />
      <label for={name}>{labelText}</label>
    </div>
  );
};

RadioGroup.Radio.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
RadioGroup.Radio.displayName = "RadioGroup.Radio";
