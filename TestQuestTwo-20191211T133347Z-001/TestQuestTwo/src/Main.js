import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBarComponent from "./components/NavBarComponent";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
    
    </Switch>

    <NavBarComponent/>
  </main>
);

export default Main;
