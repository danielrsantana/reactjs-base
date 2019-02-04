import * as React from 'react';
import { TestComponent } from './test';

interface IProps {
  application: string,
  bundler: string,
  compiler: string,
  framework: string
}

class App extends React.Component<IProps, {}> {
  render() {
    const { application, bundler, compiler, framework } = this.props;

    return (
      <React.Fragment>
        <h1>
          Welcome to {application}
        </h1>
        <p>This is a <strong>{framework}</strong> application using <strong>{compiler}</strong> with <strong>{bundler}</strong>.</p>
        <div className="container">
          <div className="notification">
            This container is <strong>centered</strong> on desktop.
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
