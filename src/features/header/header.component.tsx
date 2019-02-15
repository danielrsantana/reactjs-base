import React from "react";
import { Link } from "react-router-dom";
import "./header.component.scss";

export class HeaderComponent extends React.Component<{}, {}> {
  render() {
    return (
      <div className="headerComponent columns is-size-4">
        <div className="headerComponentLogo column is-2">
          <img
            src="http://www.kredite.org/wp-content/uploads/2017/05/Flex-Payment-Beitragsbild.png"
            alt="Flex Payment"
          />
        </div>
        <div className="headerComponentNavigation column is-10 has-text-centered">
          <div className="icon-bar">
            <Link to="/">
              <i className="fas fa-home" />
              Home
            </Link>
            <Link to="/componentsViewer">
              <i className="fas fa-globe" />
              Component Viewer
            </Link>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
export default HeaderComponent;
