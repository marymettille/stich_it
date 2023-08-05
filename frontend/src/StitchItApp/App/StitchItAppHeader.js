import { Button } from "../../design-system";
import { useNavigate } from "react-router-dom";
import "./StitchItAppHeader.scss";

export const StitchItAppHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="stitch-it-app-header">
      <h2>Time to Get Stitching!</h2>
      <div className="navigation-controls">
        <Button
          icon="home"
          onClick={() => navigate(`/`)}
          aria-label="Navigate to home page"
        />
        <Button
          icon="new"
          onClick={() => navigate(`/pattern/create`)}
          aria-label="Navigate to Create a New Pattern Page"
        />
      </div>
    </header>
  );
};
