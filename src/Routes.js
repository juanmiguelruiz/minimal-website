import React from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CvPage from "./pages/CvPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/cv" element={<CvPage />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
