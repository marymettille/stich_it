import { Button } from "../../design-system";
import { useNavigate } from "react-router-dom";
import "./StitchItAppHeader.scss";

export const StitchItAppHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="stitch-it-app-header">
      <h2>Time to Get Stitching!</h2>
      <div className="navigation-controls">
        <Button icon="home" onClick={() => navigate(`/`)} />
        <Button icon="new" onClick={() => navigate(`/pattern/create`)} />
      </div>
    </header>
  );
};
