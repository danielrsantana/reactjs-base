import React from "react";
import { Link } from "react-router-dom";
import "./header.component.scss";

export class HeaderComponent extends React.Component<{}, {}> {
  onDocumentationClicked = (event: any) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="headerComponent columns">
        <div className="headerComponentLogo column is-1">
            <img
              src="http://www.kredite.org/wp-content/uploads/2017/05/Flex-Payment-Beitragsbild.png"
              alt="Flex Payment"
            />
        </div>
        <div className="headerComponentBody column is-11 has-background-light">
          <div id="navbarMenuHeroB" className="navbar-menu">
            <div className="navbar-end is-unselectable">
              <Link to="/" className="navbar-item">
                <i className="fas fa-home is-active" />
                Home
              </Link>
              <Link to="/componentsViewer" className="navbar-item">
                <i className="fas fa-globe" />
                Component Viewer
              </Link>
              <a className="navbar-item disabled" onClick={this.onDocumentationClicked}>
                <i className="fas fa-file" />
                Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderComponent;
