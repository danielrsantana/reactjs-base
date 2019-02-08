import * as React from "react";

export default class StaticInputText extends React.Component<{}, {}> {
  render() {
    return (
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="text"
            placeholder="Text input"
            value="bulma"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user" />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check" />
          </span>
        </div>
        <p className="help is-success">This username is available</p>
      </div>
    );
  }
}
