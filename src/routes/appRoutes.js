import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import ScrollTop from "../utils/ScrollTop";
import {
  Header as HeaderView,
  Home as HomeView,
  Display as DisplayView,
} from "../pages";

const AppRoutes = () => (
  <Router>
    <HeaderView />
    <DisplayView />
    <ScrollTop />
    <Switch>
      <Route path="/" component={HomeView} exact={true} />
    </Switch>
  </Router>
);

export default AppRoutes;
