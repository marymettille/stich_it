import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "../features/Projects/Projects";

export const StitchItRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
    </Router>
  );
};
