import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./Components/layout/Nav";
import MainContainer from "./Components/layout/MainContainer";
import Footer from "./Components/layout/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Fragment>
          <Nav />
          <MainContainer />
          <Footer />
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
