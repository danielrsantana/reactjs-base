import * as React from "react";
import HeaderComponent from "../features/header/header.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomePage from "./welcome/welcome.page";
import { ComponentsViewer } from "./componentsViewer/componentsViewer.page";
import "./app.scss";
import { store } from "../redux/store";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <HeaderComponent {...this.props} />
          <div className="appContent">
            <Switch>
              <Route exact path="/" component={WelcomePage} store={store} />
              <Route
                path="/componentsViewer"
                component={ComponentsViewer}
                store={store}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
