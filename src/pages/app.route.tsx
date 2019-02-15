import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import WelcomePage from "./welcome/welcome.page";
import { ComponentsViewer } from "./componentsViewer/componentsViewer.page";

export interface RootProps {
  store: any;
}

const AppRoute = (props: RootProps) => (
  <BrowserRouter>
    <Switch >
      <Route exact path="/" component={WelcomePage} />
      <Route path="/componentsViewer" component={ComponentsViewer} />
    </Switch>
  </BrowserRouter>
);

export default AppRoute;
