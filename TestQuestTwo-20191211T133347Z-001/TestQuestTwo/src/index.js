import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter } from "react-router-dom";

AOS.init();

ReactDOM.render(
  
    <BrowserRouter>
      <App/>
    </BrowserRouter>,

  document.getElementById("root")
);

serviceWorker.unregister();
