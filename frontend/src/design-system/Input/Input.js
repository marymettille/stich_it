import "./style.scss";

export const Input = ({ labelText, placeholderText, name }) => {
  return (
    <div className="base-input">
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <input
        id={name}
        aria-label={placeholderText}
        placeholder={placeholderText}
      />
    </div>
  );
};
