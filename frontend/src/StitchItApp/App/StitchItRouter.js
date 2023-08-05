import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { PatternGrid } from "../features/Patterns/PatternGrid";
import { PatternDetail } from "../features/Patterns/PatternDetail";
import { StitchItAppHeader } from "./StitchItAppHeader";
import { CreatePatternForm } from "../features/Patterns/CreatePatternForm";
import "./style.scss";

export const StitchItRouter = () => {
  return (
    <Provider store={store}>
      <Router>
        <StitchItAppHeader />
        <div className="container">
          <Routes>
            <Route path="/" element={<PatternGrid />} />
            <Route path="/pattern/:id" element={<PatternDetail />} />
            <Route path="/pattern/create" element={<CreatePatternForm />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};
