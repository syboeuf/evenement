import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "./views/Home";
import Label from "./views/Label";
import Agence from "./views/Agence";
import Error from "./views/Error";

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Open Sans"', "built_tiling", "Roboto"].join(","),
    h2: {
      fontFamily: '"built_tiling", Open Sans',
    },
    body1: {
      fontFamily: '"Roboto", Open Sans',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Label" component={Label} />
          <Route exact path="/Agence" component={Agence} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  </ThemeProvider>
);

export default App;
