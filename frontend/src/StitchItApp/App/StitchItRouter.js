import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { Projects } from "../features/Projects/Projects";

export const StitchItRouter = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Projects />} />
        </Routes>
      </Router>
    </Provider>
  );
};
