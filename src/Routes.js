import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CvPage from "./pages/CvPage"


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cv" component={CvPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
