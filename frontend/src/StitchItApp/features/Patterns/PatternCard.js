import "./PatternCard.scss";

import { useNavigate } from "react-router-dom";

export const PatternCard = ({ pattern }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pattern/${pattern.id}`);
  };

  return (
    <div className="pattern-card" onClick={handleClick}>
      <h3>{pattern.name}</h3>
      <p>{pattern.author}</p>
    </div>
  );
};
