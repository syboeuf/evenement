import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "./views/Home";
import Label from "./views/Label";
import Agence from "./views/Agence";
import Footer from "./views/Footer";

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
      <div>
        <Router>
          <Switch>
            <Route exact path="/Label" component={Label} />
            <Route exact path="/Agence" component={Agence} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
      <div className="line" />
      <div className="line" />
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
