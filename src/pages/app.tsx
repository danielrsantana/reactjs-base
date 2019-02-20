import * as React from "react";
import HeaderComponent from "../features/header/header.component";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "./welcome/welcome.page";
import "./app.scss";
import { store } from "../redux/store";
import TestAreaPage from "./testArea/testArea.page";
import ComponentsViewerPage from "./componentsViewer/componentsViewer.page";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <HeaderComponent {...this.props} />
        <div className="appContent">
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/componentsViewer" component={ComponentsViewerPage}/>
            <Route path="/testArea" component={TestAreaPage}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
