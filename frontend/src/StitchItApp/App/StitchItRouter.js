import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { Patterns } from "../features/Patterns/Patterns";
import { PatternDetail } from "../features/Patterns/PatternDetail";

export const StitchItRouter = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Patterns />} />
          <Route path="/pattern/:id" element={<PatternDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
};
