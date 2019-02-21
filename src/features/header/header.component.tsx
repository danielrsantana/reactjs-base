import React from "react";
import { Link, withRouter } from "react-router-dom";
import ButtonComponent from "../../components/button/button.component";
import classnames from "classnames";

import "./header.component.scss";

export interface HeaderComponentProps {
  location: any;
}

export interface HeaderComponentState {
  currentPage: string;
}

export class HeaderComponent extends React.Component<
  HeaderComponentProps,
  HeaderComponentState
> {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: props.location
        ? props.location.pathname.replace(/\//g, "")
        : ""
    };
  }
  componentDidUpdate() {
    const { location } = this.props;
    const currentPage = location ? location.pathname.replace(/\//g, "") : "";
    const { currentPage: previousStatePage } = this.state;

    if (currentPage !== previousStatePage) {
      this.setState({
        currentPage: currentPage
      });
    }
  }

  onDocumentationClicked = (event: any) => {
    event.preventDefault();
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div className="headerComponent columns">
        <div className="headerComponentLogo column is-2 has-text-centered">
          <div className="logo">
            <a href="index.html">
              <img src="img/logo.jpg" alt="Flex Payment" />
            </a>
          </div>
        </div>
        <div className="headerComponentBody column is-8 is-offset-2">
          <div className="columns">
            <div className="column is-8 is-flex is-pulled-right">
              <Link
                to="/"
                className={classnames({
                  "navbar-item": true,
                  "has-text-link": currentPage === ""
                })}
              >
                <i className="fas fa-home is-active" />
                Home
              </Link>
              <Link
                to="/componentsViewer"
                className={classnames({
                  "navbar-item": true,
                  "has-text-link": currentPage === "componentsViewer"
                })}
              >
                <i className="fas fa-globe" />
                Component Viewer
              </Link>
              <Link
                to="/testArea"
                className={classnames({
                  "navbar-item": true,
                  "has-text-link": currentPage === "testArea"
                })}
              >
                <i className="fas fa-wrench" />
                Test Area
              </Link>
              <a
                className={classnames({
                  "navbar-item": true,
                  disabled: true,
                  "has-text-link": currentPage === "documentation"
                })}
                onClick={this.onDocumentationClicked}
              >
                <i className="fas fa-file" />
                Documentation
              </a>
            </div>
            <div className="column is-3">
              <div className="columns">
                <div className="column is-6 is-flex is-pulled-right">
                  <ButtonComponent
                    text="Register"
                    isSuccess={true}
                    isOutlined={true}
                    isFullwidtdh={true}
                  />
                </div>
                <div className="column is-6 is-flex is-pulled-right">
                  <ButtonComponent
                    text="Login"
                    isSuccess={true}
                    isFullwidtdh={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(HeaderComponent);
