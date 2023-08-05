import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

export const Textarea = ({
  className,
  columns,
  labelText,
  name,
  onChange,
  placeholderText,
  rows,
}) => {
  const classes = classNames("textarea-container", className);

  return (
    <div className={classes}>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <textarea
        id={name}
        aria-label={placeholderText}
        placeholder={placeholderText}
        onChange={onChange}
        rows={rows}
        cols={columns}
      />
    </div>
  );
};

Textarea.defaultProps = {
  rows: "6",
  columns: "50",
};

Textarea.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholderText: PropTypes.string,
  rows: PropTypes.string,
};
