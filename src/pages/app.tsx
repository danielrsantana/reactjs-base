import * as React from "react";
import HeaderComponent from "../features/header/header.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomePage from "./welcome/welcome.page";
import { ComponentsViewer } from "./componentsViewer/componentsViewer.page";
import "./app.scss";

export interface AppProps {
  store: any;
  history?: any;
}
class App extends React.Component<AppProps, {}> {
  render() {
    console.log(this.props.store);
    console.log(this.props.history);

    return (
      <BrowserRouter>
        <div className="app">
          <div className="appHeader">
            <HeaderComponent {...this.props} />
          </div>
          <div className="appContent">
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route path="/componentsViewer" component={ComponentsViewer} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
