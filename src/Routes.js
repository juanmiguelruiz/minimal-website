import React from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import { CV, Home } from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
