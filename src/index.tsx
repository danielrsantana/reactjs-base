import React from "react";
import { render } from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from "./pages/app";

declare let module: any;

render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById("root")
);

module.hot && module.hot.accept();
