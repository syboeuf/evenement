import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Label from "./views/Label";
import Agence from "./views/Agence";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/Label" component={Label} />
      <Route exact path="/Agence" component={Agence} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
