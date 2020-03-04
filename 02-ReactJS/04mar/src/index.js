import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import App from "./App";

const Home = () => <h1>This is home Component</h1>;
const About = () => <h1>This is About Component</h1>;

render(
  <BrowserRouter>
    <NavigationBar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/profile/:profileId" component={Profile} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
