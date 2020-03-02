import React, { Component } from "react";
import Resume from "./resume";
import Contact from "./contact";
import About from "./about";
import Projects from "./projects";
import { Route, Switch } from "react-router-dom";




class main extends Component {
  render() {
    return (
          <div style={{height:'100%'}}>
        <Switch>
          <Route path="/" exact component={Resume} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
        </div>
    );
  }
}

export default main;