import React from "react";
import { Route } from "react-router-dom";
import Landing from "../../Landing";
import Users from "../../Users";
import Sellers from "../../Sellers";
import About from "../../About";

export default function index() {
  return (
    <>
      <Route exact path="/" component={Landing} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/sellers" component={Sellers} />
      <Route exact path="/about" component={About} />
    </>
  );
}
