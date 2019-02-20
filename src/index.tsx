import React from "react";
import { render } from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from "./pages/app";
import { BrowserRouter } from "react-router-dom";

declare let module: any;

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

module.hot && module.hot.accept();
