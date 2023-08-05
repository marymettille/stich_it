import classNames from "classnames";
import "./style.scss";

export const Input = ({
  className,
  labelText,
  placeholderText,
  name,
  onChange,
}) => {
  const classes = classNames("base-input", className);
  return (
    <div className={classes}>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <input
        type="text"
        id={name}
        aria-label={placeholderText}
        placeholder={placeholderText}
        onChange={onChange}
      />
    </div>
  );
};
