import React from "react";
import { Footer, Header } from "../../components/moleculs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./mainApp.scss";
import Home from "../Home";
import About from "../About";

function MainApp() {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route path="/about-page">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default MainApp;
