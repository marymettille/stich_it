import "./style.scss";

export const Button = ({ children, onClick }) => {
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
      className="base-button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={children}
    >
      {children}
    </button>
  );
};
