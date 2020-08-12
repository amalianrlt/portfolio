import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "../src/styles/scss/MainPage.scss";
import { MainPage } from "./views/MainPage";
import { AboutPage } from "./views/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact/>
        <Route path="/about" component={AboutPage} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
