import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import State from "../utils/State";
import Header from "./Header/Header";
import Home from "../pages/Home/Home";

import "./App.scss";

export default function App() {
  return (
    <State>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => <Home {...routeProps} />}
          />
        </Switch>
      </Router>
    </State>
  );
}
