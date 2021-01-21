import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Main from "../pages/main";
import Repositorio from "../pages/repositories";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/repositorio/:repositorio" component={Repositorio} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
