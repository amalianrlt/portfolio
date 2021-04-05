import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "../src/styles/scss/MainPage.scss";
import { ProjectPage } from "./views/MainPage";
import { AboutPage } from "./views/AboutPage";
import { NotFound } from "./views/NotFound";
import { Main } from "./views/Main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/project" component={ProjectPage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/" component={Main} exact />
        <Route component={NotFound} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
